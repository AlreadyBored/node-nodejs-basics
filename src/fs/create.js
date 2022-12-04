import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

export const create = async () => {
    try{
        await fs.writeFile(path.join(dirname, 'files', 'fresh.txt'), 'I am fresh and young', {flag: "wx"});
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();