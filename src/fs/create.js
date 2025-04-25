import { writeFile, access } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const filePath = join(__dirname, '..', 'fs', 'fresh.txt');

    try {
        await access(filePath, constants.F_OK);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw new Error('FS operation failed');
        }

        await writeFile(filePath, 'I am fresh and young!', { flag: 'wx' });
    }
};

await create();
