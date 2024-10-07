import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceDir = path.join(__dirname, 'files');
    const destinationDir = path.join(__dirname, 'files_copy');

    try {

        await fs.access(sourceDir);
        
        try {
            await fs.access(destinationDir);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }

        await fs.mkdir(destinationDir);
        const items = await fs.readdir(sourceDir, { withFileTypes: true });

        for (const item of items) {
            const sourcePath = path.join(sourceDir, item.name);
            const destinationPath = path.join(destinationDir, item.name);

            if (item.isDirectory()) {
                await fs.mkdir(destinationPath);
                await copyDirectory(sourcePath, destinationPath);
            } else if (item.isFile()) {
                await fs.copyFile(sourcePath, destinationPath);
            }
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

const copyDirectory = async (src, dest) => {
    const items = await fs.readdir(src, { withFileTypes: true });

    for (const item of items) {
        const srcPath = path.join(src, item.name);
        const destPath = path.join(dest, item.name);

        if (item.isDirectory()) {
            await fs.mkdir(destPath);
            await copyDirectory(srcPath, destPath);
        } else if (item.isFile()) {
            await fs.copyFile(srcPath, destPath);
        }
    }
};

await copy();
