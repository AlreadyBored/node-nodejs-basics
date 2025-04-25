import { unlink, access } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await access(filePath, constants.F_OK);

        await unlink(filePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();
