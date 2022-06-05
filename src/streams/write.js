import * as fs from 'fs';
import { stdin } from 'process';

export const write = async () => {
    let stream = fs.createWriteStream('files/fileToWrite.txt')
    stdin.on('data', function(chunk) {
        stream.write(chunk)
    })
 };


write()