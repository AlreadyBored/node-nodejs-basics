import fs from 'fs';
import {stdin} from 'process';

export const write = async () => {
    // const readStream = fs.createReadStream('./files/fileToRead.txt')
    const  writeStream = fs.createWriteStream('./files/fileToWrite.txt')
    // readStream.pipe(writeStream)
    stdin.pipe(writeStream)
};


