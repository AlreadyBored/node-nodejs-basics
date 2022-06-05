const path = 'src/streams/files/fileToWrite.txt'
import { createWriteStream } from "fs";
const fileStream = createWriteStream(path);

async function makeTask() {
    let message;
    process.stdin.on('data', data => {
        message = data;
        console.log(message.toString())
        fileStream.write(message.toString());
        process.exit()
    })
}

export const write = async () => {
    // Write your code here 
    makeTask()
};