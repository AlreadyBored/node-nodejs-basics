import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  const stream = createReadStream(filePath);

  stream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
