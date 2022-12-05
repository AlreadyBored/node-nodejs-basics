//10

import fs, { copyFile } from 'fs';

const copy = async () => {
    const message = 'FS operation failed';
    const folder = './fs/files';
    const folderCopy = './fs/files_copy';

    try {
        if(fs.existsSync(folder) && !fs.existsSync(folderCopy)){

            fs.mkdir(folderCopy, (err) => {
                if (err) console.log(message);
              });

            fs.readdir(folder, (err, data) => {
                if (err) throw console.log(message);

                data.forEach(element => {
                    fs.copyFile(`${folder}/${ element }`, `${folderCopy}/${ element }`,(err) => {
                        if (err) console.log(message);
                      });
                });

            });
        } else throw new Error(message);

      } catch (err) {
        console.log(message);
     }
  
};

copy();