// Five Seconds to Explain the Glass — the house cat's defence, one sentence.
// Writes the chosen line to /output/entry.txt (UTF-8, one line, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "That glass kept reflecting my face back at me, and I don't negotiate with impostors.";

const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry length ${length} is outside 1-200 characters`);
}
if (!LINE.trim()) throw new Error("entry is blank");
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!/glass/i.test(LINE)) {
  throw new Error("entry must name the glass (judge criterion 1)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
