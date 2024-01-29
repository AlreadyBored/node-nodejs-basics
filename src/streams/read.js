import * as fs from 'fs';

const read = async () => {
    const readableStream = fs.createReadStream('src/streams/files/fileToRead.txt');
    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    })
};

await read();