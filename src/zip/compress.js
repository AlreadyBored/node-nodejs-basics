import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream, unlink } from 'fs';

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
      unlink(file, (error) => {
        if (error) {
          console.error('Error deleting file:', error);
        } else {
          console.log('Original file deleted');
        }
      });
    });
};

await compress();
