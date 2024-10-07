import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const copy = async () => {
    const srcDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    try {
        // check if source directory exists
        await fs.access(srcDir);
        // check if destination directory already exists
        await fs.access(destDir);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            // destination does not exist, continue
            await fs.mkdir(destDir);
            // read all items in the source directory
            const items = await fs.readdir(srcDir, { withFileTypes: true });
            for (const item of items) {
                const srcPath = path.join(srcDir, item.name);
                const destPath = path.join(destDir, item.name);
                if (item.isDirectory()) {
                    // recursively copy subdirectories
                } else {
                    // copy files
                    await fs.copyFile(srcPath, destPath);
                }
            }
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await copy();
