import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        await fs.access(fileToRead, constants.F_OK);
        await fs.access(fileToRead, constants.R_OK);

        const data = await fs.readFile(fileToRead, 'utf8');
        console.log(data);

    }  catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();