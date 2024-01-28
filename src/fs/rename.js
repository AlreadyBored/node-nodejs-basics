import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const oldFile = join(__dirname,'files','wrongFilename.txt');
    const newFile = join(__dirname,'files','properFilename.md');

    try {
        await fs.access(oldFile);
        try {
            await fs.access(newFile);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.rename(oldFile, newFile);
            } else {
                throw error;
            }
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();