import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const SOURCE_FILE_PATH = 'files/archive.gz'
const DEST_FILE_PATH = 'files/fileToCompress1.txt'

export const decompress = async () => {
    createReadStream(SOURCE_FILE_PATH)
    .pipe(createUnzip())
    .pipe(createWriteStream(DEST_FILE_PATH))
};
