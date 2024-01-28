import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
    const originalDir = 'src/fs/files';
    const copyDir = 'src/fs/files_copy';

    try {
        await fs.access(originalDir);
    } catch (err) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.access(copyDir);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.mkdir(copyDir);
        } else {
            throw err;
        }
    }

    const files = await fs.readdir(originalDir);

    for (let file of files) {
        const srcFile = path.join(originalDir, file);
        const destFile = path.join(copyDir, file);
        await fs.copyFile(srcFile, destFile);
    }
};

await copy();
