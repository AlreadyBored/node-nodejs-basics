import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const compress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const r = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'));
  const z = createGzip();
  const w = createWriteStream(join(__dirname, 'files', 'archive.gz'));
  r.pipe(z).pipe(w);
};

compress();
