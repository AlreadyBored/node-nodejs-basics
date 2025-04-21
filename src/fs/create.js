import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const freshFileInFilesFolder = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await fs.access(freshFileInFilesFolder, constants.F_OK);
        
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(freshFileInFilesFolder, 'I am fresh and young');
        } else {
            throw error;
        }
    }
};

await create();