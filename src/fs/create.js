import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path';

const create = async () => {
    const content = 'I am fresh and young';
    const errorMessage = 'FS operation failed';
    const path = '/files/fresh.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        await writeFile(`${__dirname}${path}`, content, {flag: 'wx'});
    } catch(e) {
        throw new Error(errorMessage);
    }
};

await create();