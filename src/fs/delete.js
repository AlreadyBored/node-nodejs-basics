import {access, unlink} from 'fs/promises';
import {constants} from "fs";

const remove = async () => {
    const path = 'src/fs/files/fileToRemove.txt';
    const exists = await fileExists(path);

    if (!exists) {
        throw new Error('FS operation failed');
    }

    try {
        await unlink(path);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();

async function fileExists(filePath) {
    try {
        await access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}
