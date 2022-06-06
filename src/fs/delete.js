import * as fs from 'fs';

export const remove = async () => {
    fs.unlink('./files/fileToRemove.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });
};

