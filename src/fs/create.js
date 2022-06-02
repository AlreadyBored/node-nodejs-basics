import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
    try {
        const pathToFolders = path.join(__dirname, 'files');
        const filename = 'fresh.txt';
        const filesIntoFolder = await fs.promises.readdir(pathToFolders);
        if (filesIntoFolder.includes(filename)) {
            throw new Error('FS operation failed');
        }
        const content = 'I am fresh and young';
        await fs.promises.writeFile(path.join(pathToFolders, filename), content);
    } catch (error) {
        console.log(error);
    }
};