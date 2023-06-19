import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


const fileToCompress = './files/fileToCompress.txt';
const archive = './files/archive.gz';

const compress = async (initialFile, finalFile) => {

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const absoluteInitialFilePath = path.join(__dirname, initialFile);
    const absoluteFinalFilePath = path.join(__dirname, finalFile);

    const readStream = fs.createReadStream(absoluteInitialFilePath);
    const writeStream = fs.createWriteStream(absoluteFinalFilePath);
    const gzipStream = zlib.createGzip();
    try {
        await pipeline(readStream, gzipStream, writeStream);
    } catch (err) {
        console.error(err.message);
    }
};

await compress(fileToCompress, archive);