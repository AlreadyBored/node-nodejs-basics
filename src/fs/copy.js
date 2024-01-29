import { existsSync } from 'node:fs';
import { mkdir, readdir, copyFile } from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
    const srcDir = path.join(process.cwd(), 'src/fs/files');
    const destDir = path.join(process.cwd(), 'src/fs/files_copy');

    if (existsSync(destDir) || !existsSync(srcDir)) {
        throw new Error('FS operation failed');
    }

    try {
        await mkdir(destDir);

        const files = await readdir(srcDir);
        for (const file of files) {
            await copyFile(path.join(srcDir, file), path.join(destDir, file));
        }
    } catch (err) {
        console.error(err);
    }
};

await copy();
