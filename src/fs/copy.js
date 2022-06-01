import {existsSync} from 'fs';
import {mkdir, opendir, copyFile} from 'fs/promises';
import {fileURLToPath} from 'url';
import {join} from 'path';

export const copy = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));

    const pathFilesFolder = join(__dirname, 'files');
    const pathFilesCopyFolder = join(__dirname, 'files_copy');

    if (
        !existsSync(pathFilesFolder) ||
        existsSync(pathFilesCopyFolder)
    ) {
        throw new Error('FS operation failed');
    }

    try {
        await mkdir(pathFilesCopyFolder);
        const filesDir = await opendir(pathFilesFolder);
        for await (const file of filesDir) {
            copyFile(
                join(pathFilesFolder, file.name), 
                join(pathFilesCopyFolder, file.name)
            );
        }
    } catch(err) {
        throw err;
    }
};