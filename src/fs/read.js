import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, './files/fileToRead.txt');

const read = async () => {
    try {
        const fileContent = await fs.promises.readFile(pathToFile, { encoding: 'utf8', flag: 'r' });
        console.log(fileContent);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();