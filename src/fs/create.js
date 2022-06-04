import * as fs from 'fs';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const checkIsFileExist = (fileName) => {
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (!err) {
            console.log('file exists');
            throw new Error('FS operation failed');
        }
    });
}

export const create = async () => {
    const fileName = 'fresh.txt';
    const content = 'I am fresh and young';
    const pathToNewFile = path.join(__dirname, '/files', fileName);
    checkIsFileExist(pathToNewFile);
    fs.writeFile(pathToNewFile, content, (err) => {
        if (err) throw err;
        console.log(`The file: ${fileName} has been saved!`);
      });
};

create();
