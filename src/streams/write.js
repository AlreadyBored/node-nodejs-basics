import fs from "fs";
import path from "path";

const write = async () => {
    // Write your code here
    // write.js - implement function that writes process.stdin data
    // into file fileToWrite.txt content using Writable Stream

    const file = path.resolve('src', 'streams', 'files', 'fileToWrite.txt')
    const writeStream = fs.createWriteStream(file)
    process.stdin.pipe(writeStream)
};

await write();