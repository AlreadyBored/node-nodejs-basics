import { createWriteStream } from 'fs'
import { stdin } from 'process'

const FILE_PATH = 'files/fileToWrite.txt';

export const write = async () => {
    const ws = createWriteStream(FILE_PATH);

    stdin.pipe(ws);
};
