import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filesFolder = path.join(__dirname, 'files');
    const filesCopyFolder = path.join(__dirname, 'files_copy');

    try {
        await fs.access(filesFolder, constants.F_OK);

    }  catch (error) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.access(filesCopyFolder, constants.F_OK);

        throw new Error('FS operation failed');

    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }

        await fs.mkdir(filesCopyFolder, { recursive: true });

        const files = await fs.readdir(filesFolder);
        await Promise.all(files.map(async (file) => {
            const srcFile = path.join(filesFolder, file);
            const destFile = path.join(filesCopyFolder, file);
            await fs.copyFile(srcFile, destFile);
        }));
    }
};

await copy();
