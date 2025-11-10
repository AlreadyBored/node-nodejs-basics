import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, 'files', 'archive.gz');
  const destPath = path.join(__dirname, 'files', 'fileToCompress.txt');

  const gunzip = createGunzip();

  await new Promise((resolve, reject) => {
    pipeline(
      createReadStream(sourcePath),
      gunzip,
      createWriteStream(destPath, { flags: 'w' }),
      (err) => {
        if (err) reject(err); else resolve();
      }
    );
  });
};

try {
  await decompress();
} catch (e) {
  console.error('Decompression error:', e.message);
  process.exitCode = 1;
}
