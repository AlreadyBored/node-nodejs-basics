import path from 'path';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorText = 'FS operation failed';

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const stream = createReadStream(filePath, { encoding: 'utf8' });

  stream.on('error', (err) => {
    console.error(errorText, err);
  });
  stream.on('data', (chunk) => {
   process.stdout.write(chunk)
  });
  stream.on('end', () => {
    console.log('\nFile was read!');
  });
};

await read();
