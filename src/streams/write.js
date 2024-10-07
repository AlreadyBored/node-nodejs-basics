import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('Data has been written to fileToWrite.txt successfully.');
  });

  writeStream.on('error', (error) => {
    console.error('Error writing to the file:', error.message);
  });
}

await write();