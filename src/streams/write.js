import fs from 'node:fs';
import process from 'node:process';

const write = async () => {
    let stream = fs.createWriteStream('./files/fileToWrite.txt');
    process.stdin.pipe(stream);
    // process.stdin.resume();
};

await write();