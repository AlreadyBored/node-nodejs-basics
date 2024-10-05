import { access, cp, mkdir, readdir, copyFile } from 'fs/promises';
import path from "path";

const copy = async () => {
    const sourceDir = path.join(process.cwd(), 'src/fs/files');
    const destDir = path.join(process.cwd(), 'src/fs/files_copy');
      
    try {
        await access(sourceDir);
    } catch (error) {
        throw new Error('FS operation failed');
    }

    try {
        await access(destDir);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }

    cp(sourceDir, destDir, {recursive: true});
};

await copy();
