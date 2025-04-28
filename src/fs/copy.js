import fs from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
    const sourceDir = path.resolve('files');
    const destDir = path.resolve('files_copy');

    try {
        await fs.access(sourceDir);

        try {
            await fs.access(destDir);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }

        await fs.mkdir(destDir);

        const files = await fs.readdir(sourceDir);

        for (const file of files) {
            await fs.copyFile(
                path.join(sourceDir, file),
                path.join(destDir, file)
            );
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
