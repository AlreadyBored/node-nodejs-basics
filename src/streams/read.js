import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  await new Promise((resolve, reject) => {
    pipeline(createReadStream(filePath), process.stdout, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

try {
  await read();
} catch (e) {
  console.error('Stream read error:', e.message);
  process.exitCode = 1;
}
