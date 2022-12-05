import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const rename = async () => {
    const wrongFilenamePath = path.join(dirname, 'files', 'wrongFilename.txt');
    const properFilenamePath = path.join(dirname, 'files', 'properFilename.md');

    let isNoExistWrongFilename = !fs.existsSync(wrongFilenamePath)
    let isExistProperFilename = fs.existsSync(properFilenamePath)

    if (isNoExistWrongFilename || isExistProperFilename) {
        throw Error('FS operation failed')
    } else {
        fs.rename(properFilenamePath, wrongFilenamePath, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log("success!");
            }
        });
    }
};

await rename();