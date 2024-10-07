const fs = require('fs');

const read = async () => {
    const readableStream = fs.createReadStream('fileToRead.txt');
    readableStream.pipe(process.stdout);
};

await read();
