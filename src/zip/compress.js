import {createGzip} from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream/promises';

const compress = async () => {
    const isExists = fs.existsSync('./src/zip/files/fileToCompress.txt');
    if (!isExists) throw new Error('FS operation failed');
    const fileStream = fs.createReadStream('./src/zip/files/fileToCompress.txt');
    const zipedFile = fs.createWriteStream('./src/zip/files/archive.gz');
    await pipeline(fileStream,createGzip(),zipedFile)
        .catch(err => console.log(err));
};

await compress();