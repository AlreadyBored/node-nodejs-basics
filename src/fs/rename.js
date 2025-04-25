import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { rename as fileRename } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const srcFile = join(__dirname, 'files', 'wrongFilename.txt');
    const destFile = join(__dirname, 'files', 'properFilename.md');

    try {
        await fileRename(srcFile, destFile);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();