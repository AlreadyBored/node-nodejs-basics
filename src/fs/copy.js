import { resolve, dirname } from 'path';
import { mkdir, readdir, readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

export const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        const filesDir = resolve(__dirname, 'files');
        const copyFilesDir = resolve(__dirname, 'files_copy');
        await mkdir(copyFilesDir);
        const files = await readdir(filesDir);

        files.forEach(async (filePath) => {
            const fileContent = await readFile(resolve(filesDir, filePath));
            await writeFile(resolve(copyFilesDir, filePath), fileContent);
        });
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

copy();