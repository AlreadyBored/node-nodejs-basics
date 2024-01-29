import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const absolutePath = path.dirname(__filename);
const folderPath = path.join(absolutePath, 'files');
const copyFolderPath = path.join(absolutePath, 'files_copy');

const copy = async () => {
    try {
        await fs.mkdir(copyFolderPath);

        const files = await fs.readdir(folderPath);

        await Promise.all(
            files.map(async (file) => {
                const sourcePath = path.join(folderPath, file);
                const destinationPath = path.join(copyFolderPath, file);

                await fs.copyFile(sourcePath, destinationPath);
            })
        );

    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
