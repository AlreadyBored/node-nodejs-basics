import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

  const writable = createWriteStream(filePath);

  process.stdin.pipe(writable);
};

await write();
