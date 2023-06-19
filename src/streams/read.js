import fs from 'fs';

const read = async () => {

    const reader = fs.createReadStream('./src/streams/files/fileToRead.txt')
    reader.on('data', function (chunk) {
        process.stdout.write(chunk.toString());
    });

};

await read();