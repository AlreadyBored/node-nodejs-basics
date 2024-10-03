import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = path.join(__dirname, 'files');
const destPath = path.join(__dirname, 'files_copy');

const copy = async () => {
    // Write your code here 
    try {
        await fs.cp(sourcePath, destPath, { recursive: true, force: false, errorOnExist: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();