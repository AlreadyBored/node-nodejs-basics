import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILENAME_DECOMPRESS_TO = 'fileToCompress.txt';
const ARCHIVE_FILENAME = 'archive.gz';

const decompress = async () => {
    const filePath = path.join(__dirname, 'files', FILENAME_DECOMPRESS_TO);
    const archivePath = path.join(__dirname, 'files', ARCHIVE_FILENAME);
    const readStream = fs.createReadStream(archivePath);
  
    const writeStream = fs.createWriteStream(filePath);
  
    const gunzipStream = zlib.createGunzip();
    readStream.pipe(gunzipStream).pipe(writeStream);
    writeStream.on("finish", () => {
      console.log("Success!");
    });
};

await decompress();