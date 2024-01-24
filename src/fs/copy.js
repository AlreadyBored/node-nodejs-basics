import * as fs from 'fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
    try {
        // checks if files folder exists
        await fs.access(
            join(__dirname, 'files'),
            fs.constants.F_OK
        )
        .catch(() => {
            throw new Error('FS operation failed');
        })
        // checks if files_copy folder exists
        await fs.access(
            join(__dirname, 'files_copy'),
            fs.constants.F_OK
        )
        .then(() => {
            throw new Error('FS operation failed');
        })
    } catch(err) {
        if (err.code === 'ENOENT') {
            const files = await fs.readdir(
                join(__dirname, 'files')
            );
            await fs.mkdir(
                join(__dirname, 'files_copy')
            );
            await Promise.all(
                files.map(item => {
                    fs.copyFile(
                        join(__dirname, 'files', item),
                        join(__dirname, 'files_copy', item)
                    );
                })
            );
        } else {
            console.log(err.message);
        }
    }
};

await copy();
