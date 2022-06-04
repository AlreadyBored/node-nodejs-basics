import * as fs from 'fs';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const create = async () => {
    const fileName = 'fresh.txt';
    const content = 'I am fresh and young';
    const pathToNewFile = path.join(__dirname, '/files', fileName);

    fs.access(pathToNewFile, fs.constants.F_OK, (err) => {
        if (!err) {
            console.log('file exists');
            throw new Error('FS operation failed');
        }
    });

    fs.writeFile(pathToNewFile, content, (err) => {
        if (err) throw err;
        console.log(`The file: ${fileName} has been saved!`);
    });
};

create();
