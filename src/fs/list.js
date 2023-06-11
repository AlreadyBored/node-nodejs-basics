import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path';
import { existsSync } from 'node:fs'
import { readdir } from 'node:fs/promises'

const list = async () => {
    const errorMessage = 'FS operation failed';
    const filesDirPath = '/files';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const isFileExist = existsSync(`${__dirname}${filesDirPath}`);

    if (!isFileExist) {
        throw new Error(errorMessage);
    }

    try {
        const files = await readdir(`${__dirname}${filesDirPath}`);
        files.forEach(e => console.log(e));
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await list();