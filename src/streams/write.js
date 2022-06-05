import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  const writableStream = fs.createWriteStream(
    join(__dirname, 'files', 'fileToWrite.txt'),'utf-8'
  );
  
  process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
      writableStream.write(chunk);
    }
  });
};

write();
