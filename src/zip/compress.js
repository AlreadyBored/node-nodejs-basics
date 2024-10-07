import fs from 'node:fs';
import { join } from 'node:path';
import { createGzip } from 'node:zlib';

const FOLDER = '/files';
const FILE_NAME = 'fileToCompress.txt';
const ZIP_FILE_NAME = 'archive.gz'

const fileForCompress = join(import.meta.dirname, FOLDER, FILE_NAME);
const toZipFile = join(import.meta.dirname, FOLDER, ZIP_FILE_NAME);

const compress = async () => {
    // Write your code here 

    const readableStream = fs.createReadStream(fileForCompress);
    const writableStream = fs.createWriteStream(toZipFile);

    const gzip = createGzip();
    readableStream.pipe(gzip).pipe(writableStream);
};

await compress();