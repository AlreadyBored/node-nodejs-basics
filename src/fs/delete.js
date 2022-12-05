import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const remove = async () => {
    const filenamePath = path.join(dirname, 'files', 'fileToRead.txt');

    let isNoExistFilename = !fs.existsSync(filenamePath)

    if (isNoExistFilename) {
        throw Error('FS operation failed')
    } else {
        fs.unlink(filenamePath, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log("success!");
            }
        });
    }
};

await remove();