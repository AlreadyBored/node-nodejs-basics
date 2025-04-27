import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const sourceFilePath = path.join(__dirname, 'files', 'archive.gz');
  const destinationFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(sourceFilePath);
    const gunzipStream = zlib.createGunzip();
    const writeStream = fs.createWriteStream(destinationFilePath);

    readStream.on('error', (error) => {
      reject(error);
    });

    gunzipStream.on('error', (error) => {
      reject(error);
    });

    writeStream.on('error', (error) => {
      reject(error);
    });

    writeStream.on('finish', () => {
      resolve();
    });

    readStream
      .pipe(gunzipStream)
      .pipe(writeStream);
  });
};

await decompress();