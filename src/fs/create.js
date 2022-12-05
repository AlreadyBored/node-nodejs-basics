//6

import fs from 'fs';
const create = async () => {
    
    const message = 'FS operation failed';
    const text = 'I am fresh and young';
    const filename = './fs/files/fresh.txt';

    try {
        if(!fs.existsSync(filename)){
            fs.appendFile(filename, text, (err) => {
                if (err) throw console.log(message);
            });
        } else throw new Error(message);
      } catch (err) {
        console.log(message);
      }
};

await create();