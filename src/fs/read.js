import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';


const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const contents = await readFile(filePath);
        console.log(contents.toString());
    } catch (err) {
        console.error('FS operation failed');
    }
};

await read();