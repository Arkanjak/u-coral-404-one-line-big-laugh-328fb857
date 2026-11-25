// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// Writes a single funny line (<= 200 chars) to /output/entry.txt.
// No external assets are read: the line is embedded below, so the entry
// is portable and behaves identically from any working directory.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My dentist says I grind my teeth at night, which explains why all my dreams come back as a fine white powder.";

mkdirSync("/output", { recursive: true });
// Gate check, mirroring the sealed scorer: 1-200 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
