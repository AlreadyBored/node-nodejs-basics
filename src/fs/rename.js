import { promises } from 'fs';
import { join } from 'path';

const rename = async () => {
    const sourcePath = join(import.meta.dirname, 'files', 'wrongFilename.txt');
    const destPath = join(import.meta.dirname, 'files', 'properFilename.md');

    try {
        await promises.access(sourcePath);

        const isNewFileExists = await promises.access(destPath).then(() => true).catch(() => false);
        if (isNewFileExists) {
            throw new Error('FS operation failed');
        }

        await promises.rename(sourcePath, destPath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();
