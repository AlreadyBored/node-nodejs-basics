import fs from 'fs';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

    try {
        await fs.promises.access(fileToWrite, constants.F_OK);
    
        const writeStream = fs.createWriteStream(fileToWrite);

        process.stdin.pipe(writeStream);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await write();