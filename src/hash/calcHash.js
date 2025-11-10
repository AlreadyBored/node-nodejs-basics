import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// filepath: c:\Users\Sergeyu\IdeaProjects\node-nodejs-basics\src\hash\calcHash.js
const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    stream.on('error', (err) => {
      console.error('Stream error while reading file:', err.message);
      reject(err);
    });

    stream.on('data', (chunk) => {
      hash.update(chunk);
    });

    stream.on('end', () => {
      try {
        const digest = hash.digest('hex');
        console.log(digest);
        resolve(digest);
      } catch (err) {
        console.error('Hash digest error:', err.message);
        reject(err);
      }
    });
  });
};

try {
  await calculateHash();
} catch (err) {
  // Already logged detailed error above; keep outer catch minimal
  process.exitCode = 1;
}
