import {promises as fs} from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const fileName = "wrongFilename.txt";
    const fileNewName = "wrongFilename.txt";
    const filePath = path.resolve(__dirname, 'files', fileName);
    const newFilePath = path.resolve(__dirname, 'files', fileNewName);
    try {
        await fs.access(newFilePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            try {
                await fs.rename(filePath, newFilePath);
                console.log('File renamed');
            } catch (error) {
                throw new Error('FS operation failed');
            }
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await rename();
