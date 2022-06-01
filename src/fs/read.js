import {existsSync} from 'fs';
import {readFile} from 'fs/promises';
import {fileURLToPath} from 'url';
import {join} from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
    const pathFile = join(__dirname, 'files', 'fileToRead.txt');

    if (!existsSync(pathFile)) {
        throw new Error('FS operation failed');
    }

    try {
        const content = await readFile(pathFile, 'utf-8');
        console.log(content);
    } catch(err) {
        throw err;
    }
};