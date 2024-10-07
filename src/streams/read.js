import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath, 'utf-8');

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
  readStream.on('end', () => {
    console.log('\nFile reading completed.');
  });
  readStream.on('error', (error) => {
    console.error('Error reading the file:', error.message);
  });
};

await read();