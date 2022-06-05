import { open, close, readFile } from 'fs';

export const read = async () => {
    const directory = './files/';
    const fileName = 'fileToRead.txt';
    const filePath = directory + fileName;
    
    await open(filePath, 'r', (err, fd) => {
        if (err) {
         if (err.code === 'ENOENT') {
            throw 'FS operation failed';
         }    
          throw err;
        } 

        try {
            readFile(filePath, {encoding: 'utf-8'}, (err, content) => {
                if (err) throw err;
                console.log(content);
            });
        } finally {
          close(fd, (err) => {
            if (err) throw err;
          });
        }
      }); 
};
