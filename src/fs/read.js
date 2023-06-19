import { readFile, existsSync } from 'fs';

const read = async () => {
   const filePath = './src/fs/files/fileToRead.txt';
   if (!existsSync(filePath)) {
      throw new Error('FS operation failed');
   }
   readFile(filePath, 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data)
   })
};

await read();