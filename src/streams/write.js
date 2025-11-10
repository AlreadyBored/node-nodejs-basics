import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  await new Promise((resolve, reject) => {
    pipeline(process.stdin, createWriteStream(filePath, { flags: 'w' }), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

try {
  await write();
} catch (e) {
  console.error('Stream write error:', e.message);
  process.exitCode = 1;
}
