import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const srcPath = join(__dirname, 'files');
  const destPath = join(__dirname, 'files_copy');

  try {
    await mkdir(destPath);
    const files = await readdir(srcPath);

    for (const file of files) {
      const curSrc = resolve(srcPath, file);
      const curDest = resolve(destPath, file);

      await pipeline(
        createReadStream(curSrc),
        createWriteStream(curDest)
      );
    }
  } catch(e) {
    throw new Error ('FS operation failed');
  }
};

await copy();
