import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const fileToDecompress = path.join(__dirname, 'archive.gz');
    const output = path.join(__dirname, 'fileToCompress.txt');
  
    const readStream = fs.createReadStream(fileToDecompress);
    const writeStream = fs.createWriteStream(output);
    const gunzip = zlib.createGunzip();
  
    readStream.pipe(gunzip).pipe(writeStream);
  };
  

await decompress();