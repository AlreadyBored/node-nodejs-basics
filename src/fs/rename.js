import { open, close, rename as renameFile } from 'fs';

export const rename = async () => {
    const fileDirectory = './files/'; 
    const fileName = 'wrongFilename.txt';
    const filePath = fileDirectory + fileName;
    const newFileName = 'properFilename.md';
    const newFilePath = fileDirectory + newFileName;

    await open(newFilePath, 'wx', (err, fd) => {
        if (err) {
          if (err.code === 'EEXIST') {
            console.error(`${filePath} already exists`);
            return;
          }
      
          throw err;
        } 

        try {
            renameFile(filePath, newFilePath, (err) => console.log(err));
        } finally {
          close(fd, (err) => {
            if (err) throw err;
          });
        }
      });
};
