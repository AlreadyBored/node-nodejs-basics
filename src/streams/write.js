import { createWriteStream } from 'node:fs';
import process from 'node:process';

import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const path = join(__dirname, 'files', 'fileToWrite.txt');
  const ws = createWriteStream(path);

  process.stdin.pipe(ws);
};

await write();
