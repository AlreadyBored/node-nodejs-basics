import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
  try {
    const unzip = zlib.createUnzip();
    const input = fs.createReadStream(join(__dirname, 'files', 'archive.gz'));
    const output = fs.createWriteStream(
      join(__dirname, 'files', 'fileToCompress.txt'),
    );
    input.pipe(unzip).pipe(output);
  } catch (error) {
    throw new Error(error)
  }
};

decompress();
