import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
    try {
        const nameFolder = 'files';
        const pathToFolder = path.join(__dirname, nameFolder);
        const pathToMainFolder = path.join(__dirname);

        const filesAndFoldersIntoMainFolder = await fs.promises.readdir(pathToMainFolder);

        if (!filesAndFoldersIntoMainFolder.includes(nameFolder)) {
            throw new Error('FS operation failed');
        }

        const filesIntoFolder = await fs.promises.readdir(pathToFolder);

        for (let file of filesIntoFolder) {
            console.log(file);
        }
    } catch (error) {
        console.log(error);
    }
};