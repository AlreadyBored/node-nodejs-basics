import { access, constants, readFile, readdir, unlink } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, 'files') 

const read = async () => {

    try {
        const fileContent = await readFile(path.join(filesFolder, 'fileToRead.txt'),'utf8')
        console.log(fileContent);
    } catch (error) {

        throw new Error('FS operation failed')
    }
};

await read();