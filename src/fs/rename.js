import { rename as rn } from 'fs/promises';
import { access } from 'fs/promises';
import { constants } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const wrongFile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'wrongFilename.txt');
    const rigthFile = join(dirname(fileURLToPath(import.meta.url)), 'files', 'properFilename.md');

    const fileExists = async (file) => {
        try {
            await access(file, constants.F_OK);
            return true;
        } catch (err) {
            return false;
        }
    };

    try {
        const isExistRigthFile = await fileExists(rigthFile);
        const isExistWrongFile = await fileExists(wrongFile);
        if (!isExistRigthFile && isExistWrongFile) {
            await rn(wrongFile, rigthFile);
        } else {
            throw new Error('FS operation failed');
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();
