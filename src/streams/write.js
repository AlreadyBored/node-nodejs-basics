import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const filePath = resolve(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const stream = createWriteStream(filePath);

  process.stdin.pipe(stream);

  stream.on('error', (err) => {
    console.error('Error:', err.message);
  });
};

await write();
