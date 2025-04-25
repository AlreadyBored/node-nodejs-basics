import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { access, mkdir, cp } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const checkDir = async (dir) => {
    try {
        await access(dir);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code !== 'ENOENT') throw error;
    }
}

const copy = async () => {
    const srcDir = join(__dirname, 'files');
    const destDir = join(__dirname, 'files_copy');

    try {
        await checkDir(destDir);
        await mkdir(destDir, { recursive: true });
        await cp(srcDir, destDir, { recursive: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
