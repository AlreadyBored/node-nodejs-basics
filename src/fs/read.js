import fs from 'fs';

export const read = async () => {
    const readFile = './files/fileToRead.txt';

    fs.readFile(readFile, 'utf8', function (err,data) {
        if (err) {
          return console.log('FS operation failed');
        }
        console.log(data);
      });

};

read()