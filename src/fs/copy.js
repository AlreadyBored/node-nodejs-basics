import { access, mkdir, readdir, stat, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mainDirExist = async (src) => {
    try {
        await access(src);
    } catch (error) {
        throw new Error('FS operation failed: source directory doesn\'t exist');
    }
};

const IsDestinationDirExist = async (src) => {
    try {
        await access(src);
        return true;
    } catch {
        return false;
    }
};

const copyFolderRecursive = async (from, to) => {
    const items = await readdir(from, { withFileTypes: true });

    for (const item of items) {
        const srcPath = path.join(from, item.name);
        const destPath = path.join(to, item.name);

        if (item.isDirectory()) {
            await mkdir(destPath, { recursive: true });
            await copyFolderRecursive(srcPath, destPath);
        } else {
            await copyFile(srcPath, destPath);
        }
    }
};

const copy = async () => {
    const srcDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    try {
        await mainDirExist(srcDir);

        if (await IsDestinationDirExist(destDir)) {
            throw new Error('FS operation failed: destination directory already exists');
        }

        await mkdir(destDir, { recursive: true });
        await copyFolderRecursive(srcDir, destDir);
        console.log('Copying files is successful');
    } catch (error) {
        console.error(error.message);
    }
};

await copy();
