import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const _fileName = fileURLToPath(import.meta.url);
const _dirName = path.dirname(_fileName);

const read = async () => {
    const fileToReadName = 'fileToRead.txt';
    const filePath = path.join(_dirName, 'files', fileToReadName);

    try {
        await fs.access(filePath);
        const standard = 'utf-8';
        const content = await fs.readFile(filePath, standard);
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
