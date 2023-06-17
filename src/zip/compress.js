import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const file = join(__dirname, 'files', 'fileToCompress.txt');
  const compressed = join(__dirname, 'files', 'archive.gz');
  const handleStream = createReadStream(file);

  handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(compressed))
    .on('finish', () => {
      console.log('compression done');
    });
};

await compress();
