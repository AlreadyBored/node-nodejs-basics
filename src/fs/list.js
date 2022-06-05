import { open, close, readdir } from 'fs';

export const list = async () => {
    const directory = './files/';
    
    await open(directory, 'r', (err, fd) => {
        if (err) {
         if (err.code === 'ENOENT') {
            throw 'FS operation failed';
         }    
          throw err;
        } 

        try {
            readdir(directory, (err, files) => {
                if (err) throw err;
                for (const file of files) console.log(file);
            });
        } finally {
          close(fd, (err) => {
            if (err) throw err;
          });
        }
      });
};
