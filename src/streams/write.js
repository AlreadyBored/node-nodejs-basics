import { open } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';

// write.js - implement function that writes process.stdin data
// into file fileToWrite.txt content using Writable Stream

const write = async () => {
    // Write your code here
    const pathToFileToWrite = './files/fileToWrite.txt';
    const fd = await open(pathToFileToWrite, 'w');
    const writableStream = fd.createWriteStream();

    try {
        await pipeline(process.stdin, writableStream);
    } finally {
        await fd.close();
    }
};

await write();
