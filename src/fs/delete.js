import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'node:fs';

const remove = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const path = join(dirName, 'files', 'fileToRemove.txt');

    if (!fs.existsSync(path)) {
        throw new Error('FS operation failed')
    } else {
        fs.unlink(path, () => {})
    }
};

await remove();
