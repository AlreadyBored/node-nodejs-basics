import fs  from "fs";
import path from 'path';
import { fileURLToPath } from 'url';


const remove = async () => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));
    const deleteFilePath = currentPath + '/files/fileToRemove.txt';

    if (!fs.existsSync(deleteFilePath)) {
        throw 'FS operation failed';
    } else {
        fs.unlinkSync(deleteFilePath);
    }
}

await remove();