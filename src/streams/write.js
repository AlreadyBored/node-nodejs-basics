import fs from 'fs';
import process from 'node:process';

let file = './src/streams/files/fileToWrite.txt'

const write = async () => {
    let writeableStream = fs.createWriteStream(file);
    writeableStream.write(`${process.stdin.read}`);
};

await write();