import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const list = async () => {
    const srcDir = path.join(dirname, 'files');

    try {
        const filenames = await fs.readdir(srcDir);
        filenames.forEach(filename => console.log(filename));
    } catch {
        throw new Error('FS operation failed');
    }

};

await list();