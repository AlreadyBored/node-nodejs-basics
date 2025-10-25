import path from 'path';
import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorText = 'FS operation failed';

const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const stream = createWriteStream(filePath, { encoding: 'utf8' });

stream.on('error', () => {
  console.error(errorText);
});

stream.on('finish', () => {
  console.log('File has been written');
});

  process.stdin.pipe(stream)
};

await write();
