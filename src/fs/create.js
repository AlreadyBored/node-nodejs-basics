import { open, close, writeFile } from 'fs';

export const create = async () => {

    const directory = './files/';
    const fileName = 'fresh.txt';
    const filePath = directory + fileName;
    const contnet = 'I am fresh and young';
    
    await open(filePath, 'wx', (err, fd) => {
        if (err) {
          if (err.code === 'EEXIST') {
            console.error(`${filePath} already exists`);
            return;
          }
      
          throw err;
        } 

        try {
            writeFile(filePath, contnet, (err) => console.log(err));
        } finally {
          close(fd, (err) => {
            if (err) throw err;
          });
        }
      });
};



