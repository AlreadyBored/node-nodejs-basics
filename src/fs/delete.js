import fs from 'fs';

const filePath = './files/fileToRemove.txt'

const remove = async (filePath) => {

    fs.unlink(filePath, (err) => {
       if (err) throw err.message;
   })
};

await remove(filePath);

// delete.js - implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)