import {access, cp} from 'fs/promises';
import {constants} from "fs";

const copy = async () => {
    const srcPath = 'src/fs/files';
    const destPath = 'src/fs/files_copy';
    const exists = await fileExists(destPath);

    if (exists) {
        throw new Error('FS operation failed');
    }

    try {
        await cp(srcPath, destPath, {recursive: true});
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();

async function fileExists(filePath) {
    try {
        await access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}
