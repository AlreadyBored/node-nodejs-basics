import {createWriteStream} from 'node:fs';
import process from 'node:process';

const write = async () => {
    const writeableStream = createWriteStream('./src/streams/files/fileToWrite.txt');
    console.log("Press Ctrl+C if you want to finish recording")
    process.stdin.on("data", data => {
        data = data.toString();
        writeableStream.write(data+' \n');
    })
};

await write();