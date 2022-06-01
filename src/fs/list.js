import {existsSync} from 'fs';
import {opendir} from 'fs/promises';
import {fileURLToPath} from 'url';
import {join} from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const list = async () => {
    const pathDir = join(__dirname, 'files');

    if (!existsSync(pathDir)) {
        throw new Error('FS operation failed');
    }

    try {
        const files = await opendir(pathDir);
        for await (const file of files) {
            console.log(file.name);
        }
    } catch(err) {
        throw err;
    }
};