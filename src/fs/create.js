import { stat, writeFile } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fsException, folderName } from '../constants.js';

const content = 'I am fresh and young';
const fileName = 'fresh.txt';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, folderName, fileName);

export const create = async () => {
    stat(pathToFile, (err, stats) => {
        if (stats) throw new Error(fsException);
        writeFile(pathToFile, content, function(error){
            if (error) throw new Error(fsException);
            process.exit();
        });
    });
};

create();