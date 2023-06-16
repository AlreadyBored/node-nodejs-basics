import { access, constants, readFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        // Check if the file exists
        await access(filePath, constants.F_OK);
        // File exists, read its content
        const content = await readFile(filePath, 'utf-8');
        console.log(content);
    } catch (error) {
        // File doesn't exist, throw an error
        throw new Error('FS operation failed');
    }
};

await read();