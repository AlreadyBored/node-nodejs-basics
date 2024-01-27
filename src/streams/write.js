import { createWriteStream } from "fs";

const file = './files/fileToWrite.txt'

const write = async () => {
    const writeStream = createWriteStream(file)
    process.stdin.pipe(writeStream)
}; 

await write();