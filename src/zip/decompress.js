import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const inputFilePath = path.join(__dirname, 'files', 'archive.gz');
  const outputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

  // Create readable and writable streams
  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);
  const gunzip = createGunzip(); // Create a Gunzip transform stream

  // Pipe the read stream into the gunzip transform stream and then to the write stream
  readStream
    .pipe(gunzip)
    .pipe(writeStream)
    .on('finish', () => {
      console.log('File decompressed successfully to fileToCompress.txt');
    })
    .on('error', (error) => {
      console.error('Error during decompression:', error.message);
    });
};

await decompress();