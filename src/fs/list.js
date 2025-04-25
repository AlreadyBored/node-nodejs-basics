import { readdir, access } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const folderPath = join(__dirname, 'files');

    try {
        await access(folderPath, constants.F_OK);

        const files = await readdir(folderPath);
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();
