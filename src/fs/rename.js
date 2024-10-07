import path from 'path';
import fs from 'fs/promises';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkIsExist = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch (error) {
        if (error.code === 'ENOENT') {
            return false; // File does not exist
        }
        throw error; // Re-throw if it's a different error
    }
}

const rename = async () => {
    let oldFilename = 'wrongFilename.txt'
    let newFilename = 'properFilename.md'
    const oldPath = path.join(__dirname, 'files', oldFilename);
    const newPath = path.join(__dirname, 'files', newFilename);

    try {
        const oldExists = await checkIsExist(oldPath);
        const newExists = await checkIsExist(newPath);

        console.log('Old file exists:', oldExists);
        console.log('New file exists:', newExists);

        if (!oldExists || newExists) {
            throw new Error('FS operation failed');
        }

        await fs.rename(oldPath, newPath);
        console.log('File renamed successfully');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

await rename();