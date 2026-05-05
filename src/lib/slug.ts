/** URL-safe slug derived from a human title (Nest-portable plain function). */
export function slugify(input: string) {
  const s = input
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
  return s.length > 0 ? s : "item";
}
