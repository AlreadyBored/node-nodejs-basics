import { open, writeFile } from 'node:fs';

const create = async () => {
    // Write your code here 

    const file = './files/fresh.txt';
    const content = 'I am fresh and young';

    open(file, 'wx', (err, fd) => {
        if (err) {
          if (err.code === 'EEXIST') {
            throw 'FS operation failed';
          }
      
          throw err;
        }
    
        writeFile(file, content, function (err) {
            if (err) throw err;
        });
      }); 
    
};

await create();