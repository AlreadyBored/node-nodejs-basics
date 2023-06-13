/*
 implement function that creates new file fresh.txt 
 with content "I am fresh and young" inside of the "files" folder 
 (if file already exists "Error" with message "FS operation failed" must be thrown)
 */

import fs from 'fs';

const create = async () => {

    const FILE_NAME = "fresh.txt";
    const FILE_CONTENT = "I am fresh and young";
    const PATH = `./src/fs/files/${FILE_NAME}`;
    const ERR_MSG = "FS operation failed";

    fs.stat(PATH, function(err, stat) {
        if (err == null) {
          throw new Error(ERR_MSG);
        } else if (err.code === 'ENOENT') {
            fs.writeFile(PATH, FILE_CONTENT, err => {
                console.log('Error while writing: ', err.code);
            });
        } else {
          console.log('Some other error: ', err.code);
        }
      });
};

await create();