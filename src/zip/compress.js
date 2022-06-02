import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {open} from 'node:fs/promises';
import fs from 'node:fs';
import zlib from 'node:zlib';

export const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const subDir = 'files'
    const fileName = 'fileToCompress.txt';
    const compressedFileName = 'archive.gz';
    const absoluteReadPath = path.join(__dirname, subDir, fileName);
    const absoluteWriteFileName = path.join(__dirname, subDir, compressedFileName);

    const fd = await open(absoluteReadPath).catch(err => err);

    if (fd instanceof Error) {
        throw new Error('FS operation failed');
    }

    const readStream = fd.createReadStream();
    const gZip = zlib.createGzip();
    const writeStream = fs.createWriteStream(absoluteWriteFileName);

    readStream
        .pipe(gZip)
        .pipe(writeStream);
};

compress();