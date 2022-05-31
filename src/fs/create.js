import fs from 'fs';

export const create = async () => {
    fs.existsSync('src/fs/files/fresh.txt', exists => {
        if (exists) { 
            throw new Error('FS operation failed');
        } else {
            fs.writeFile("src/fs/files/fresh.txt", "I am fresh and young", () => {});
        }
      }); 
};


// create()