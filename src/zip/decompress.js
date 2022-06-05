import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async (fileArchived, file) => {
  const filePath = path.join(__dirname, 'files', file);
  const fileArchivedPath = path.join(__dirname, 'files', fileArchived);

  const gzip = zlib.createGunzip();

  const source = fs.createReadStream(fileArchivedPath);
  const destination = fs.createWriteStream(filePath);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

decompress('archive.gz', 'fileToCompress.txt');