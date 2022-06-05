import fs from 'fs';
import {existsSync} from'node:fs';


export const list = async () => {
    const filesFolder = './files/';

        fs.readdir(filesFolder, (err, files) => {
          if (err) {
            return console.log('FS operation failed');
          }
            files.forEach(file => {
              console.log(file);
            });
          });
};

list()