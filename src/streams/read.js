import fs from 'fs';

const read = async () => {
    let readStream = fs.createReadStream('./src/streams/files/fileToRead.txt', 'utf8');

    readStream.on('data', (str) => {
        process.stdout.write(str);
    });
};

await read();