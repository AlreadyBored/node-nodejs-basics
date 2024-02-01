// implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
import { statfs, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = path.resolve(__dirname, 'files');
    const filesFolderCopyPath = path.resolve(__dirname, 'files_copy');
    try {
        await statfs(filesFolderPath);
    } catch {
        throw new Error ('FS operation failed');
    }
  
    try {
        await cp(filesFolderPath, filesFolderCopyPath, {
            force: false,
            errorOnExist: true,
            recursive: true
        });
    } catch (err) {
        if (err.code == 'ERR_FS_CP_EEXIST') {
            throw new Error ('FS operation failed');
        }
    }
};

await copy();
