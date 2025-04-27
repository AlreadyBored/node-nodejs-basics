import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  return new Promise((resolve, reject) => {
    const writableStream = fs.createWriteStream(filePath);

    writableStream.on('error', (error) => {
      console.error(`Error: ${error.message}`);
      reject(error);
    });

    process.stdin.pipe(writableStream);

    process.stdin.on('end', () => {
      writableStream.end();
      resolve();
    });

    process.stdin.on('close', () => {
      writableStream.end();
      resolve();
    });
  });
};

await write();
