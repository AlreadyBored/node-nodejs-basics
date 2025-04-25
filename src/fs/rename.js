import { rename as fsRename, access } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const folderPath = join(__dirname, 'files');
    const oldPath = join(folderPath, 'wrongFilename.txt');
    const newPath = join(folderPath, 'properFilename.md');

    try {
        await access(oldPath, constants.F_OK);

        try {
            await access(newPath, constants.F_OK);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        await fsRename(oldPath, newPath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();
