import {createReadStream} from 'fs';
import {fileURLToPath} from 'url';
import {join} from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
    const pathFile = join(__dirname, 'files', 'fileToRead.txt');

    const readStream = createReadStream(pathFile);

    readStream.pipe(process.stdout);
};