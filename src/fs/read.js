import fs from 'fs';

export const read = async () => {
    
    fs.readFile(
        'files/fileToRead.txt', 'utf8',
        function (error, data) {
            if (error) console.log(new Error('FS operation failed'));
            console.log(data);
        });
};

read();