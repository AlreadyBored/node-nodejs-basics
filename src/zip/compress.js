import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  try {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream(
      join(__dirname, 'files', 'fileToCompress.txt'),
    );
    const output = fs.createWriteStream(join(__dirname, 'files', 'archive.gz'));
    input.pipe(gzip).pipe(output);
  } catch (error) {
    throw new Error(error);
  }
};

compress();
