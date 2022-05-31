import { stat, writeFile } from 'node:fs';
import { fsException, folderName } from '../constants.js';

export const create = async () => {
    const content = 'I am fresh and young';
    const fileName = 'fresh.txt';
    const pathToFile = `${folderName}/${fileName}`;

    stat(pathToFile, (err, stats) => {
        if (stats) throw new Error(fsException);
        writeFile(pathToFile, content, function(error){
            if (error) throw new Error(fsException);
            process.exit();
        });
    });
};

create();