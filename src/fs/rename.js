import * as fs from 'fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const oldFileName = 'wrongFilename.txt';
const newFileName = 'properFilename.md';

const rename = async () => {
    try {
        // checks if wrongFilename.txt exists
        await fs.access(
            join(__dirname, 'files', oldFileName),
            fs.constants.F_OK
        )
        .catch(() => {
            throw new Error('FS operation failed');
        })
        // checks if properFilename.md exists
        await fs.access(
            join(__dirname, 'files', newFileName),
            fs.constants.F_OK
        )
        .then(() => {
            throw new Error('FS operation failed');
        })
    } catch(err) {
        if (err.code === 'ENOENT') {
            await fs.rename(
                join(__dirname, 'files', oldFileName),
                join(__dirname, 'files', newFileName)
            );
        } else {
            console.log(err.message);
        }
    }
};

await rename();