import { createWriteStream } from "fs";

const file = new URL('./files/fileToWrite.txt', import.meta.url)

const write = async () => {
    const writeStream = createWriteStream(file)
    process.stdin.pipe(writeStream)
}; 

await write();