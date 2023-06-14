import fs from 'fs';
import ifExists from "./ifExists.js";
const read = async () => {
    // Write your code here
    const pathToFile = new URL('files_copy/', import.meta.url).pathname.substring(1);
    const targetFile = pathToFile + 'fileToRead.txt';
    if (!await ifExists(targetFile)){
        throw new Error('FS operation failed');
    }

    fs.readFile(targetFile, { encoding: 'utf8' }, (err, data) => {
        if (err){
            console.log(err);
        }
        console.log(data)
    })
};

await read();