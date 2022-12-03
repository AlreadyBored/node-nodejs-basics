import fs from 'fs';

const read = async () => {

    const dir = 'src/streams/files/fileToRead.txt';

    const readStream = fs.createReadStream(dir);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    });
};  

await read();   