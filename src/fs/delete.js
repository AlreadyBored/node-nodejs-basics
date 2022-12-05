import fs from 'fs';

const remove = async () => {
    // Write your code here
    fs.access('files/fileToRemove.txt', (err) => {
        if (err) {
            throw Error ('FS operation failed');
        } else {
            fs.unlink('files/fileToRemove.txt', err => {
                if(err) throw err;
             });
        }
    });
};

await remove();