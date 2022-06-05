import { mkdir, access, copyFile, readdir} from 'fs/promises';

export const copy = async () => {
    let isDestDirExist;

    try {
        await access('./files/');
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await access('./files_copy/');
        isDestDirExist = true;
    } catch {
        isDestDirExist = false;
    }

    if(isDestDirExist) {
        throw new Error('FS operation failed');
    } else {
        mkdir('./files_copy/');
        try {
            const files = await readdir('./files/');
            for (const file of files) {
                copyFile(`./files/${file}`, `./files_copy/${file}`);
            }
        } catch (err) {
            throw new Error('FS operation failed');
        }
    }
};
