import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const copy = async (sourceFolder, copyFolder) => {
    const sourcePath = path.join(__dirname, sourceFolder);
    const copyPath = path.join(__dirname, copyFolder);

    if(!await fs.pathExists(sourcePath) || await fs.pathExists(copyPath)) {
        console.error('FS operation failed');
        return;
    }

    try {
        await fs.copy(sourcePath, copyPath);
        console.log('The folder has successfully been copied');

    } catch (error) {
        console.error('Error in copying folder', error)
    }
};

await copy('files', 'files_copy');
