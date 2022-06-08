import { unlink } from 'fs';

export const remove = async () => {

    const fileDirectory = './files/'; 
    const fileName = 'fileToRemove.txt';
    const filePath = fileDirectory + fileName;

    await unlink(filePath, (err) => {
        if (err) {    
          throw 'FS operation failed';
        } 

        console.log(filePath + 'was removed');
      });
};
