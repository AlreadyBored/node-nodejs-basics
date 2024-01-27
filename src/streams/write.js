// write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import fs from "fs";
import { getDirName } from "../utils/utils.js";

const write = async () => {
    const filePath = getDirName(import.meta.url) + "/files/fileToWrite.txt";
    const writeStream = fs.createWriteStream(filePath)

    process.stdin.pipe(writeStream);

    process.stdin.on('end', () => {
        console.log('File has been written.');
      });
    
      process.stdin.on('error', (error) => {
        console.error('Error:', error);
      });
};

await write();