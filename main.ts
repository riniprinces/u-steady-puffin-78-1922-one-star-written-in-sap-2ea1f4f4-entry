// One Star, Written in Sap — a houseplant's 1-star review of its human.
//
// The review, in the plant's own voice: its owner waters on a phone
// reminder's schedule, never when the plant is actually thirsty, and
// keeps it in a decorative pot with no drainage, so it spends the
// week standing in its own bathwater. One line, one star, one grievance.
//
// This program writes that single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

const REVIEW = [
  "One star. He waters me every Tuesday because his phone says so,",
  "never because I am thirsty — and this decorative pot has no",
  "drainage, so I spend the rest of the week standing in my own",
  "bathwater, slowly pickling.",
].join(" ");

if (REVIEW.length < 1 || REVIEW.length > 279 || REVIEW.trim().length === 0) {
  throw new Error(`Review must be 1-279 chars, got ${REVIEW.length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to ${OUTPUT_FILE}`);
