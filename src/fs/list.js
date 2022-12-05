import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const list = async () => {
    const folderPath = path.join(dirname, 'files');

    let isNoExistFilesFolder = !fs.existsSync(folderPath)

    if (isNoExistFilesFolder) {
        throw Error('FS operation failed')
    } else {
        fs.readdir(folderPath, function (err, files) {
            if (err) {
                console.error(err);
            } else {
                if (err) {
                    return console.log('Unable to read folder: ' + err);
                }
                files.forEach(function (file) {
                    console.log(file);
                });
            }
        });
    }
};

await list();