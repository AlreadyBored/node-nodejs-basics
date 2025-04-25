import {createGunzip} from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream/promises';

const decompress = async () => {
    const isExists = fs.existsSync('./src/zip/files/archive.gz');
    if (!isExists) throw new Error('FS operation failed');
    const fileStream = fs.createReadStream('./src/zip/files/archive.gz');
    const zipedFile = fs.createWriteStream('./src/zip/files/fileToCompress.txt');
    await pipeline(fileStream,createGunzip(),zipedFile)
        .catch(err => console.log(err));
};

await decompress();