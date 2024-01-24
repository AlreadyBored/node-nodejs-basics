import * as fs from 'fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileName = 'fileToRemove.txt';

const remove = async () => {
    try {
        // checks if fileToRemove.txt exists
        await fs.access(
            join(__dirname, 'files', fileName),
            fs.constants.F_OK
        )
        await fs.unlink(
            join(__dirname, 'files', fileName)
        );
    } catch(err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            console.log(err.message);
        }
    }
};

await remove();