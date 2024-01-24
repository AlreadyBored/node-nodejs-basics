import * as fs from 'fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const fileName = 'fileToRead.txt';

const read = async () => {
    try {
        // checks if files folder exists
        await fs.access(
            join(__dirname, 'files', ),
            fs.constants.F_OK
        )
        .catch(() => {
            throw new Error('FS operation failed');
        });
        const content = await fs.readFile(
            join(__dirname, 'files', fileName),
            'utf-8'
        );
        console.log(content);
    } catch(err) {
        console.log(err.message);
    }
};

await read();