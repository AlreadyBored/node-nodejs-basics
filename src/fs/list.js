import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filesFolder = path.join(__dirname, 'files');

    try {
        await fs.access(filesFolder, constants.F_OK);

        const files = await fs.readdir(filesFolder);

        await Promise.all(files.map(async (file) => {
            console.log(file);
        }));

    }  catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();