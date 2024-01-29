import { createWriteStream } from "fs";
import { stdin } from 'process';

const write = async () => {
    const fileToWrite = 'src/streams/files/fileToWrite.txt';
    const writeStream = createWriteStream(fileToWrite, 'utf-8');
    
    stdin.on("data", function(data) {
        writeStream.write(data);
    })
};

await write();