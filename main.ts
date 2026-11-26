// The Printer Apology — entry for make.fun competition
// u-eager-stork-81-9647-the-printer-apology-60229153
//
// Writes one apology line from an office printer to /output/entry.txt.
// Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry I jammed — you feed me damp bargain paper, slap my tray, then demand colour. HR calls it a hostile workplace.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
