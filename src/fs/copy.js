import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const copy = async () => {
    const folderPath = path.join(dirname, 'files');
    const copyFolderPath = path.join(dirname, 'files_copy');

    let isNoExistFilesFolder = !fs.existsSync(folderPath)
    let isExistFilesFolder = fs.existsSync(copyFolderPath)

    if (isExistFilesFolder || isNoExistFilesFolder) {
        throw Error('FS operation failed')
    } else {
        fs.cp(folderPath, copyFolderPath, {recursive: true}, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log("success!");
            }
        });
    }
};

copy();