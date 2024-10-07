import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { promises as fs } from 'node:fs';
import path  from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {

    try {
        const pathToCopyFolded = path.join(__dirname, '/files_copy');
        const pathToCurrentFolder = path.join(__dirname, 'files');

        //check exist folder
        await fs.access(pathToCopyFolded);
        await fs.access(pathToCurrentFolder);

        await fs.mkdir(pathToCopyFolded);
    
        const fileNamesArray = await fs.readdir(pathToCurrentFolder);

        //create path and copy to each file
        for (const file of fileNamesArray) {            
            const pathToCurrentFile = path.join(pathToCurrentFolder, file);
            const pathToCopiedFile = path.join(pathToCopyFolded, file);
    
            await fs.copyFile(pathToCurrentFile, pathToCopiedFile);
        }

    } catch (error) {
        throw new Error(`FS operation failed ${error.message}`)
    }

};

await copy();
