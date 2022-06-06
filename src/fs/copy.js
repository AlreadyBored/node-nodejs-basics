import { readdir, stat, copyFile, mkdir } from 'node:fs/promises';
import path from 'path';
import { constants } from 'node:fs';


export const copy = async () => {
    const dirname = path.resolve();

    const filesFolderPath = path.join(dirname, 'files');

    const filesCopyFolderPath = path.join(dirname, 'files_copy');
    
    try {
        await stat(filesCopyFolderPath, constants.R_OK);
        await stat(filesFolderPath, constants.R_OK);
        console.error('Папка существует');
        return;
    }catch {
        const filesPath = await readdir(filesFolderPath);
        mkdir(filesCopyFolderPath);
        filesPath.forEach((filePath) => {
            copyFile(`${filesFolderPath}/${filePath}`, `${filesCopyFolderPath}/${filePath}`)
        })
    }
};

copy();