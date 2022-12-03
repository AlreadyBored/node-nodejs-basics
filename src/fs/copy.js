import fs  from "fs";
import path from 'path';
import { fileURLToPath } from 'url';


const copy = async () => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));

    const fromFolderPath = currentPath + '/files';
    const toFolderPath = currentPath + '/files_copy';

    if (fs.existsSync(toFolderPath)) {
        throw 'FS operation failed';
    }

    fs.mkdirSync(toFolderPath);
    fs.readdirSync(fromFolderPath).forEach(element => {
        if (fs.lstatSync(path.join(fromFolderPath, element)).isFile()) {
            fs.copyFileSync(path.join(fromFolderPath, element), path.join(toFolderPath, element));
        } else {
            copyFolderSync(path.join(fromFolderPath, element), path.join(toFolderPath, element));
        }
    });
};

copy();