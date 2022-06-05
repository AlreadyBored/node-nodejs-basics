import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const SOURCE_FILE_PATH = 'files/fileToCompress.txt'
const DEST_FILE_PATH = 'files/archive.gz'

export const compress = async () => {
    createReadStream(SOURCE_FILE_PATH)
    .pipe(createGzip())
    .pipe(createWriteStream(DEST_FILE_PATH))

};
