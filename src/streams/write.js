import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writableStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writableStream);

  writableStream.on('error', () => {
    throw new Error('FS operation failed');
  });
};

await write();
