import { createReadStream } from 'fs'
import { stdout } from 'process'

const FILE_PATH = 'files/fileToRead.txt'

export const read = async () => {
    createReadStream(FILE_PATH)
    .pipe(stdout);
};
