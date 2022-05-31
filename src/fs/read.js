import {readFile} from 'node:fs/promises'
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
    try {
        await readFile(`${__dirname}/files/fileToRead.txt`, {encoding: 'utf8'}).then(data => console.log(data));
    }
    catch {
        throw new Error('FS operation failed');
    }
};

read()