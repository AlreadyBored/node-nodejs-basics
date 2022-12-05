import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const read = async () => {
    const filenamePath = path.join(dirname, 'files', 'fileToRead.txt');

    let isNoExistFilename = !fs.existsSync(filenamePath)

    if (isNoExistFilename) {
        throw Error('FS operation failed')
    } else {
        fs.readFile(filenamePath, 'utf8', function (err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        });
    }
};

await read();