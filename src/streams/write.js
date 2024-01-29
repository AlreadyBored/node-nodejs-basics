// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import { createWriteStream } from 'node:fs'

const write = async () => {
    const file = createWriteStream('./files/fileToWrite.txt');
    process.stdin.pipe(file);
    process.stdin.resume();
};

await write();