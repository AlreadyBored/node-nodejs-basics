import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import Zlib from 'zlib';

const decompress = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const writeFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const readFile = path.join(__dirname, 'files', 'archive.gz');
 
    const readStream = fs.createReadStream(readFile);
    const writeStream = fs.createWriteStream(writeFile);
    const compressStream = Zlib.createGunzip();

    readStream.pipe(compressStream).pipe(writeStream);
};

await decompress();