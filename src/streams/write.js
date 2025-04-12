import path from 'node:path';
import fs from 'node:fs';
const filePath = path.resolve('src/streams/files/fileToWrite.txt');

const write = async () => {
    const writableStream = fs.createWriteStream(filePath, 'utf-8');
    process.stdin.pipe(writableStream);
    writableStream.on('finish', () => {
        console.log('Data has been written');
    });
    writableStream.on('error', (err) => {
        console.error(err.message)
    });
};

await write();
