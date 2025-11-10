import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const destPath = path.join(__dirname, 'files', 'archive.gz');

  const gzip = createGzip();

  await new Promise((resolve, reject) => {
    pipeline(
      createReadStream(sourcePath),
      gzip,
      createWriteStream(destPath, { flags: 'w' }),
      (err) => {
        if (err) reject(err); else resolve();
      }
    );
  });
};

try {
  await compress();
} catch (e) {
  console.error('Compression error:', e.message);
  process.exitCode = 1;
}
