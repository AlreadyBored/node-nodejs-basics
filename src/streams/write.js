import fs from 'fs';
const write = async () => {
    // Write your code here
    const isExists = fs.existsSync('./src/streams/files/fileToWrite.txt');
    if (!isExists) throw new Error('FS operation failed');
    const writer = fs.createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.read()
    process.stdin.pipe(writer)
};

await write();