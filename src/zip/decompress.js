import fs from 'node:fs';
import { join } from 'node:path';
import { createUnzip } from 'node:zlib';

const FOLDER = '/files';
const FILE_NAME = 'fileToCompress.txt';
const ZIP_FILE_NAME = 'archive.gz'

const fileWillGet = join(import.meta.dirname, FOLDER, FILE_NAME);
const fileForUnpack= join(import.meta.dirname, FOLDER, ZIP_FILE_NAME);

const decompress = async () => {
    const readableStream = fs.createReadStream(fileForUnpack);
    const writableStream = fs.createWriteStream(fileWillGet);

    const uz = createUnzip();
    readableStream.pipe(uz).pipe(writableStream);
};

await decompress();