import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async () => {
    try {
        const scrFolder = 'files';
        const destinationFolder = 'files-copy';

        const foldersAndFilesIntoMainFolder = await fs.promises.readdir(__dirname);

        if (!foldersAndFilesIntoMainFolder.includes(scrFolder) ||
            foldersAndFilesIntoMainFolder.includes(destinationFolder)) {
            throw new Error('FS operation failed');
        }

        const srcPath = path.join(__dirname, scrFolder);
        const destinationPath = path.join(__dirname, destinationFolder);

        const filesIntoFolder = await fs.promises.readdir(srcPath);

        await fs.promises.mkdir(destinationPath);

        filesIntoFolder.forEach(async (file) => {
            const src = path.join(srcPath, file);
            const destination = path.join(destinationPath, file);
            const data = await fs.promises.readFile(src, {encoding: 'utf8'});
            await fs.promises.writeFile(destination, data);
        });
    } catch (error) {
        console.log(error);
    }
};
