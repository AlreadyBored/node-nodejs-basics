import fs from 'fs';

const write = async () => {
    const filePath = 'src/streams/files/fileToWrite.txt';
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();
