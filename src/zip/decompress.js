import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream';

export const decompress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const source = createReadStream(join(__dirname, 'files', 'archive.gz'));
  const unzip = createUnzip();
  const destination = createWriteStream(
    join(__dirname, 'files', 'fileToCompress.txt')
  );

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

decompress();
