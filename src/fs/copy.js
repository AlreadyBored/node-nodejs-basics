import { mkdir, readdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import isFileExist from "../utils/isFileExist.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    try {
        const fileFolderPath = path.join(__dirname, 'files');
        const fileCopyFolderPath = path.join(__dirname, 'files_copy');

        await isFileExist(fileFolderPath);
        await isFileExist(fileCopyFolderPath, false);
        await mkdir(fileCopyFolderPath);

        const filesList = await readdir(fileFolderPath);
        await filesList.forEach(file => copySingleFile(file, fileFolderPath, fileCopyFolderPath))
    } catch (e) {
        console.error(e.message)
    }
};

const copySingleFile = async (file, fileFolderPath, fileCopyFolderPath) => {
    const fileCopyPath = path.join(fileFolderPath, file);
    const fileDestinationPath = path.join(fileCopyFolderPath, file);
    await copyFile(fileCopyPath, fileDestinationPath)
}

await copy();
