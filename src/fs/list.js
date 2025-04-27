import {access, readdir} from "fs/promises";
import {constants} from "fs";

const list = async () => {
    const path = 'src/fs/files';

    const exists = await fileExists(path);

    if (!exists) {
        throw new Error('FS operation failed');
    }

    try {
        const files = await readdir(path);
        console.log(files);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();

async function fileExists(filePath) {
    try {
        await access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}
