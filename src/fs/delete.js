import {existsSync} from 'fs';
import {rm} from 'fs/promises';
import {fileURLToPath} from 'url';
import {join} from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const remove = async () => {
    const pathFile = join(__dirname, 'files', 'fileToRemove.txt');

    if (!existsSync(pathFile)) {
        throw new Error('FS operation failed');
    }

    try {
        await rm(pathFile);
    } catch(err) {
        throw err;
    }
};