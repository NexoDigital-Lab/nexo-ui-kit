#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const KIT_ROOT = resolve(__dirname, '..');
const TOKENS_SRC = join(KIT_ROOT, 'src', 'styles', 'tokens.css');
const DEFAULT_TARGET = resolve(KIT_ROOT, '..', 'Nexo-Digital', 'src', 'styles', 'tokens.css');

const target = process.argv[2] ? resolve(process.argv[2]) : DEFAULT_TARGET;

if (!existsSync(TOKENS_SRC)) {
  console.error(`Source tokens not found: ${TOKENS_SRC}`);
  process.exit(1);
}

mkdirSync(dirname(target), { recursive: true });
copyFileSync(TOKENS_SRC, target);

console.log(`Tokens synced:`);
console.log(`  from: ${TOKENS_SRC}`);
console.log(`  to:   ${target}`);
