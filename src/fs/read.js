import fs from 'fs';
import path from 'path';

const toRead = path.resolve(path.dirname(''), 'src', 'fs', 'files', 'fileToRead.txt');

export const read = async () => {
    fs.readFile(toRead, 'utf8', function(error,data){
        if(error) throw new Error ('FS operation failed');; 
        console.log(data); 
    });
};

read();