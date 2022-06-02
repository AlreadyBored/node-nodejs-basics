import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
    try {
        const filename = 'fileToRemove.txt';
        const pathToFolder = path.join(__dirname, 'files');
        const pathToFile = path.join(pathToFolder, filename);

        const filesIntoFolder = await fs.promises.readdir(pathToFolder);

        if (!filesIntoFolder.includes(filename)) {
            throw new Error('FS operation failed');
        }

        await fs.promises.rm(pathToFile);
    } catch (error) {
        console.log(error);
    }
};
