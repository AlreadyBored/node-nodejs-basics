import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path';
import { cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const copy = async () => {
    const errorMessage = 'FS operation failed';
    const source = '/files';
    const destination = '/files_copy';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const dirFilesExist = existsSync(`${__dirname}${source}`);
    const dirFilesCopyExist = existsSync(`${__dirname}${destination}`);

    if (!!dirFilesExist && !dirFilesCopyExist) {
        try {
            await cp(`${__dirname}${source}`, `${__dirname}${destination}`, { recursive: true });
        } catch (e) {
            throw new Error(errorMessage);
        }
    } else {
        throw new Error(errorMessage);
    }
};

await copy();
