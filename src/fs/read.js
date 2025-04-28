import path from 'path';
import fs from 'fs';


const read = async () => {

    const filePath = path.join(process.cwd(), './files/fileToRead.txt');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) {
            if(err.code === 'ENOENT') {
                throw new Error(err.message);
            }
            else {
                throw err;
            }
        }
        console.log(data);
    })
    // Write your code here 
};

await read();


// read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
