import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

  const readable = createReadStream(filePath);

  readable.on('error', () => {
    throw new Error('FS operation failed');
  });

  readable.pipe(process.stdout);
};

await read();
