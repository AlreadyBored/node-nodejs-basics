import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILENAME_TO_COMPRESS = 'fileToCompress.txt';
const ARCHIVE_FILENAME = 'archive.gz';

const compress = async () => {
    const filePath = path.join(__dirname, 'files', FILENAME_TO_COMPRESS);
    const archivePath = path.join(__dirname, 'files', ARCHIVE_FILENAME);

    const readStream = fs.createReadStream(filePath);
  
    const writeStream = fs.createWriteStream(archivePath);
  
    const gzip = zlib.createGzip();
  
    readStream.pipe(gzip).pipe(writeStream);
  
    writeStream.on("finish", () => {
      console.log("Success!");
    });
};

await compress();