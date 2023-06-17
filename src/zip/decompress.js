import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream, unlink } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const compressed = join(__dirname, 'files', 'archive.gz');
  const decompressed = join(__dirname, 'files', 'fileToCompress.txt');
  const handleStream = createReadStream(compressed);

  handleStream
    .pipe(createGunzip())
    .pipe(createWriteStream(decompressed))
    .on('finish', () => {
      console.log('Decompression done');
      unlink(compressed, (error) => {
        if (error) {
          console.error('Error deleting file:', error);
        } else {
          console.log('Compressed file deleted');
        }
      });
    });
};

await decompress();
