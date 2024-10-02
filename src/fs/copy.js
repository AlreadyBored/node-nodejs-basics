import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

const copy = async () => {
    try {
        const sourceDir = path.join(dirname, 'files');
        const newDir = path.join(dirname, 'files_copy');

        const files = await fs.readdir(sourceDir);
        await fs.mkdir(newDir);

        for (const file of files) {
            const sourceFile = path.join(sourceDir, file);
            const copyFile = path.join(newDir, file);
            fs.copyFile(sourceFile,copyFile);
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
