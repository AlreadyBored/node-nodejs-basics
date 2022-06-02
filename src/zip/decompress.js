import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {open} from 'node:fs/promises';
import fs from 'node:fs';
import zlib from 'node:zlib';

export const decompress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const subDir = 'files'
    const fileName = 'fileToCompress.txt';
    const compressedFileName = 'archive.gz';
    const absoluteOriginalPath = path.join(__dirname, subDir, fileName);
    const absoluteCompressedFileName = path.join(__dirname, subDir, compressedFileName);

    const fd = await open(absoluteCompressedFileName).catch(err => err);

    if (fd instanceof Error) {
        throw new Error('FS operation failed');
    }

    const readStream = fd.createReadStream();
    const gunZip = zlib.createGunzip();
    const writeStream = fs.createWriteStream(absoluteOriginalPath);

    readStream
        .pipe(gunZip)
        .pipe(writeStream);
};

decompress();