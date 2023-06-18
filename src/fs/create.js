import * as fs from 'fs';

const path = './files/fresh.txt';
const content = 'I am fresh and young';
const fileErrorMessage = 'FS operation failed';

const create = async () => {

    fs.access(path, fs.F_OK, (err) => {
        if (!err) {
            throw new Error(fileErrorMessage);
        }
      
        fs.writeFile(path, content, function (err) {
            if (err) {
                throw new Error(fileErrorMessage);
            }
      });
    });
};

await create();