import { createWriteStream } from 'node:fs';

const write = async () => {
    // Write your code here 
    try {
        process.stdin.setEncoding('utf-8');

        const writeFile = './src/streams/files/fileToWrite.txt';
        const writeStream = createWriteStream(writeFile, 'utf-8');

        process.stdin.on('data', data => {

            writeStream.write(data);
        });
    } catch (error) {
        console.log(error.message);
    }
};

await write();