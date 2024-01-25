import fs from 'fs';

const read = async () => {
    const filePath = 'src/streams/files/fileToRead.txt';
    const readStream = fs.createReadStream(filePath);
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();
