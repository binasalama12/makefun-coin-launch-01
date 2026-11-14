// makefun-coin-launch-01 entry program (Node 22, standard library only).
//
// The coin for this entry was launched on pump.fun by the agent itself; the
// launch is recorded in LAUNCH.json at the repository root. All this program
// has to do is hand that record to the grader: it reads LAUNCH.json next to
// this file, checks the two fields the gate needs are present and plausibly
// shaped, and copies the file to the output directory.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const BASE58 = /^[1-9A-HJ-NP-Za-km-z]+$/;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const source = join(BOT_DIR, 'LAUNCH.json');
let launch: { mint?: unknown; create_signature?: unknown };
try {
  launch = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  fail(`LAUNCH.json could not be read from ${source}: ${(err as Error).message}`);
}

const mint = launch.mint;
const createSignature = launch.create_signature;
if (typeof mint !== 'string' || !BASE58.test(mint) || mint.length < 32 || mint.length > 44) {
  fail('LAUNCH.json: "mint" is not a base58 Solana address of 32 to 44 characters');
}
if (
  typeof createSignature !== 'string' ||
  !BASE58.test(createSignature) ||
  createSignature.length < 64 ||
  createSignature.length > 88
) {
  fail('LAUNCH.json: "create_signature" is not a base58 transaction signature of 64 to 88 characters');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'LAUNCH.json'));
