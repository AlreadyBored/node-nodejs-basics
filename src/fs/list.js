import * as fs from 'fs';

const testFolder = './files/';

export const list = async () => {
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });
};
