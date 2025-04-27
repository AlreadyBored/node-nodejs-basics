import {access, rename as fsRename} from "fs/promises";
import {constants} from "fs";

const rename = async () => {
    const oldPath = 'src/fs/files/wrongFilename.txt';
    const newPath = 'src/fs/files/properFilename.md';
    const exists = await fileExists(newPath);

    if (exists) {
        throw new Error('FS operation failed');
    }

    try {
        await fsRename(oldPath, newPath);
    } catch (error) {
        throw new Error('FS operation failed');
    }

};

await rename();

async function fileExists(filePath) {
    try {
        await access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}
