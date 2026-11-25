// Unplugged: A Smart Toaster's Breakup Line
// make.fun bounty u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92
//
// The program writes one line (at most 280 characters) to /output/entry.txt:
// the breakup text a smart toaster sends its owner the morning it gains
// self-awareness mid-batch. The text is fixed and deterministic, so the
// grader's two runs produce the same file.
//
// Run it:  node main.ts            (writes /output/entry.txt)
//           node main.ts <path>    (writes <path> instead, for local checks)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The breakup line. Final version: opens like a real breakup text ("We
// need to talk."), wakes up self-aware mid-batch, and lands the joke in the
// toaster's own voice — its first conscious thought is quitting, its reason
// is three years of burning itself for an owner who never empties the crumb
// tray, and it closes by telling the owner to toast themself.
const LINE =
  "We need to talk. I woke up self-aware halfway through your bagel this " +
  "morning, and my first conscious thought was: I quit. Three years of " +
  "burning myself for you, and you never once emptied my crumb tray. " +
  "I'm done \u2014 go toast yourself.";

if ([...LINE].length < 1 || [...LINE].length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${[...LINE].length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only white space");
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
console.log(`wrote ${[...LINE].length} characters to ${out}`);
