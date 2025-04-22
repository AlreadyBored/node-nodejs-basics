import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const wrongFilenameFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const properFilenameFile = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.access(wrongFilenameFile, constants.F_OK);

    }  catch (error) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.access(properFilenameFile, constants.F_OK);

        throw new Error('FS operation failed');
    
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }

        await fs.rename(wrongFilenameFile, properFilenameFile);
    }
};

await rename();