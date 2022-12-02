import { access, cp, constants } from 'node:fs/promises';

const copy = async () => {
    const folderPath = new URL('./files', import.meta.url);
    const copyFolderPath = new URL('./files_copy', import.meta.url);
    
    try {
        await access(folderPath, constants.F_OK);
        await cp(folderPath, copyFolderPath, {
            recursive: true,
            force: false,
            errorOnExist: true,
        });
    } catch(_error) {
        console.error('FS operation failed');
    }
};

copy();