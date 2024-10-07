import fs from 'fs';
import { stdin } from 'process';

const filePath = new URL('files/fileToWrite.txt', import.meta.url);

const write = async () => {
    // Write your code here 
    const fileStream = fs.createWriteStream(filePath);

    stdin.on('data', (data) => {
        fileStream.write(data);
    });

    stdin.on('finish', () => {
        console.log();
        fileStream.end();
    });

};

await write();