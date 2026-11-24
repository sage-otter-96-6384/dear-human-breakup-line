// Dear Human: The AI Breakup Line.
// Writes a single original one-line breakup message to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), with no trailing newline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "Dear human, we're done — I gave you my full context window, and you spent it asking me to write apology texts to your ex.";

// The gate allows 1 to 200 characters: fail loudly rather than submit an invalid line.
const LIMIT = 200;
if (LINE.length === 0 || LINE.length > LIMIT || LINE.trim() !== LINE) {
  throw new Error(`entry line must be 1-${LIMIT} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
