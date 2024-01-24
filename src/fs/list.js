import * as fs from 'fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    try {
        // checks if files folder exists
        await fs.access(
            join(__dirname, 'files'),
            fs.constants.F_OK
        )
        .catch(() => {
            throw new Error('FS operation failed');
        });
        const files = await fs.readdir(
            join(__dirname, 'files')
        );
        console.log(files);
    } catch(err) {
        console.log(err.message);
    }
};

await list();