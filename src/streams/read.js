import { createReadStream } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const filePath = resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const stream = createReadStream(filePath);

  stream.pipe(process.stdout);

  stream.on('error', (err) => {
    console.error('Error:', err.message);
  });
};

await read();
