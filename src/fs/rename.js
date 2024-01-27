import fs from 'fs/promises';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const fileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md'
    const oldFilePath = path.join(__dirname, 'files', fileName);
    const newFilePath = path.join(__dirname, 'files', newFileName);
    try {
        await fs.access(oldFilePath)
    } catch (error) {
        try {
            await fs.access(newFilePath)
        } catch (error) {
            throw new Error('FS operation failed');
        }
        throw new Error('FS operation failed. new name exist');
    }
    await fs.rename(oldFilePath, newFilePath);

};

await rename();