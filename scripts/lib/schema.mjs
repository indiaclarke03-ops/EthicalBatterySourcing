// Minimal JSON Schema (2020-12 subset) validator, no dependencies.
// Supports: $ref (local file + #/$defs), type, enum, const, required, properties,
// additionalProperties:false, items, minItems, minLength, maxLength, pattern, anyOf.
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";

export function loadSchema(path) {
  const cache = new Map();
  const load = (p) => {
    if (!cache.has(p)) cache.set(p, JSON.parse(readFileSync(p, "utf8")));
    return cache.get(p);
  };
  return { root: load(path), dir: dirname(path), load };
}

function resolve(ref, ctx, current) {
  const [file, pointer = ""] = ref.split("#");
  const doc = file ? ctx.load(join(ctx.dir, file)) : current;
  let node = doc;
  for (const part of pointer.split("/").filter(Boolean)) node = node[part];
  if (node === undefined) throw new Error(`Unresolvable $ref ${ref}`);
  return { node, doc };
}

const typeOf = (v) =>
  v === null ? "null" : Array.isArray(v) ? "array" : Number.isInteger(v) ? "integer" : typeof v;

export function validate(value, schema, ctx, path = "$", doc = ctx.root, errors = []) {
  if (schema.$ref) {
    const r = resolve(schema.$ref, ctx, doc);
    return validate(value, r.node, ctx, path, r.doc, errors);
  }
  const err = (m) => errors.push(`${path}: ${m}`);
  if (schema.anyOf) {
    const ok = schema.anyOf.some((s) => validate(value, s, ctx, path, doc, []).length === 0);
    if (!ok) err("matches none of anyOf");
    return errors;
  }
  if ("const" in schema && value !== schema.const) err(`must equal ${JSON.stringify(schema.const)}`);
  if (schema.enum && !schema.enum.includes(value)) err(`${JSON.stringify(value)} not in enum`);
  if (schema.type) {
    const types = [].concat(schema.type);
    const t = typeOf(value);
    if (!types.includes(t) && !(t === "integer" && types.includes("number"))) {
      err(`expected ${types.join("|")}, got ${t}`);
      return errors;
    }
  }
  if (typeof value === "string") {
    if (schema.minLength && value.length < schema.minLength) err(`shorter than ${schema.minLength}`);
    if (schema.maxLength && value.length > schema.maxLength) err(`longer than ${schema.maxLength}`);
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) err(`"${value}" fails pattern ${schema.pattern}`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems && value.length < schema.minItems) err(`fewer than ${schema.minItems} items`);
    if (schema.items) value.forEach((v, i) => validate(v, schema.items, ctx, `${path}[${i}]`, doc, errors));
  }
  if (typeOf(value) === "object") {
    for (const k of schema.required || []) if (!(k in value)) err(`missing required "${k}"`);
    const props = schema.properties || {};
    for (const [k, v] of Object.entries(value)) {
      if (props[k]) validate(v, props[k], ctx, `${path}.${k}`, doc, errors);
      else if (schema.additionalProperties === false) err(`unexpected property "${k}"`);
    }
  }
  return errors;
}
