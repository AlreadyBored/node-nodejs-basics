import { copyFile, constants, mkdir, readdir } from 'fs/promises'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COPY_FOLDER_PATH = path.join(__dirname, 'files');
const BASE_FOLDER_PATH = path.join(__dirname, 'copy_files');

const copy = async () => {
    try {
        const [fileNames] = await Promise.all([readdir(BASE_FOLDER_PATH), mkdir(COPY_FOLDER_PATH)]);

        const promises = fileNames.map(fileName => {
            const src = path.join(BASE_FOLDER_PATH, fileName);
            const dest = path.join(COPY_FOLDER_PATH, fileName);
            return copyFile(src, dest, constants.COPYFILE_EXCL)
        })

        await Promise.all([promises]);
    } catch {
        console.log('FS operation failed')
    }
    
};

await copy();
