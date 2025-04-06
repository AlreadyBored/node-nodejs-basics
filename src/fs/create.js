import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'node:fs';

const create = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const path = join(dirName, 'files', 'fresh.txt');

    if (fs.existsSync(path)) {
        throw new Error('FS operation failed')
    } else {
        fs.writeFile(path, 'I am fresh and young', () => {
        })     
    }
};

await create();
