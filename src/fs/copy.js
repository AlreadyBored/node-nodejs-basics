import { cp, access } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, 'files');
const newDirPath = path.join(__dirname, 'files_copy');

const copy = async () => {
    try {
        await access(dirPath);

        try {
            await access(newDirPath);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }
        await cp(dirPath, newDirPath, { recursive: true });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
