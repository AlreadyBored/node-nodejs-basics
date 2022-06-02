import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
    try {
        const pathToFolder = path.join(__dirname, 'files');
        const oldName = 'wrongFilename.txt';
        const newName = 'properFilename.md';
    
        const filesIntoFolder = await fs.promises.readdir(pathToFolder);

        if (!filesIntoFolder.includes(oldName) || filesIntoFolder.includes(newName)) {
            throw new Error('FS operation failed');
        }

        const oldPathToFile = path.join(pathToFolder, oldName);
        const newPathToFile = path.join(pathToFolder, newName);
        await fs.promises.rename(oldPathToFile, newPathToFile);
    } catch (error) {
        console.log(error);
    }
};
