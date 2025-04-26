import { cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    const targetDir = join(__dirname, 'files');
    const newDir = join(__dirname, "files_copy");
    const options = {
        recursive: true,
        force: false,
        errorOnExist: true
    };

    try {
        await cp(targetDir, newDir, options);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
