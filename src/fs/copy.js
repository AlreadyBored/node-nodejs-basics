import { readdir } from 'fs/promises';
import { mkdir } from 'fs/promises';
import { copyFile } from 'fs/promises';
import path from 'path';

const copy = async () => {
    const srcDir = './src/fs/files';
    const destDir = './src/fs/files_copy';

    const copyDir = async (src, dest) => {
        try {
            await mkdir(dest);
            const files = await readdir(src, { withFileTypes: true });
            for (const file of files) {
                if (file.isFile()) {
                    await copyFile(path.resolve(src, file.name), path.resolve(dest, file.name));
                } else if (file.isDirectory()) {
                    copyDir(path.join(src, file.name), path.join(dest, file.name));
                }
            }
        } catch {
            throw new Error('FS operation failed');
        }
    };

    try {
        copyDir(srcDir, destDir);
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
