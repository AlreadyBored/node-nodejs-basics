import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { readdir, access, constants } from 'node:fs/promises'

const list = async () => {
    const errorMessage = 'FS operation failed';
    const filesDirPath = '/files';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        await access(`${__dirname}${filesDirPath}`, constants.R_OK);
    } catch {
        throw new Error(errorMessage);
    }

    try {
        const files = await readdir(`${__dirname}${filesDirPath}`);
        files.forEach(file => console.log(file));
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await list();