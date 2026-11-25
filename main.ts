// One Line, Big Laugh — entry program for make.fun bounty
// u-coral-404-one-line-big-laugh-328fb857.
//
// The program writes a single funny line of at most 200 characters to
// /output/entry.txt. The joke: a toaster takes out a restraining order
// against its owner, reframing an everyday breakfast routine — push it
// down, walk away — as a legally documented pattern of behaviour.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My toaster filed a restraining order — apparently pushing it down every morning and walking away counts as a pattern.";

const OUTPUT = "/output/entry.txt";
const MAX_CHARS = 200;

const chars = [...LINE].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");

// Read the file back and confirm the written text is exactly the line:
// the gate rejects anything that is not 1-200 characters of UTF-8 text.
const written = readFileSync(OUTPUT, "utf8");
if (written !== LINE) {
  throw new Error("verification failed: /output/entry.txt does not match the line");
}
console.log(`wrote ${chars} characters to ${OUTPUT}`);
