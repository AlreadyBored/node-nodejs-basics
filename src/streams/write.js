import {createWriteStream} from 'fs';
import {fileURLToPath} from 'url';
import {join} from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const write = async () => {
    const pathFile = join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = createWriteStream(pathFile);

    process.stdin.pipe(writeStream);
};