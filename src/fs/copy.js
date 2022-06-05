import { mkdir, opendir, copyFile } from 'fs/promises';
import { join } from 'path';
import { getDirAndFilePath, isExist, FS_ERROR_MESSAGE } from '../helpers.js';

const { __dirname } = getDirAndFilePath(import.meta);

export const copy = async () => {
    const pathFilesFolder = join(__dirname, 'files');
    const pathFilesCopyFolder = join(__dirname, 'files_copy');

    const filesFolderIsExist = await isExist(pathFilesFolder);
    const filesFilesCopyFolderIsExist = await isExist(pathFilesCopyFolder);

    if (
        !filesFolderIsExist ||
        filesFilesCopyFolderIsExist
    ) {
        throw new Error(FS_ERROR_MESSAGE);
    }

    try {
        await mkdir(pathFilesCopyFolder);
        const files = await opendir(pathFilesFolder);
        for await (const file of files) {
            await copyFile(
                join(pathFilesFolder, file.name), 
                join(pathFilesCopyFolder, file.name)
            );
        };
    } catch(err) {
        throw err;
    }
};

copy();