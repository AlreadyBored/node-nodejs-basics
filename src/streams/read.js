import fs from 'fs';

const read = async () => {
    // create readable stream
    const readableStream = fs.createReadStream('./files/fileToRead.txt', {
        encoding: 'utf8',
    });

    // handle data event and write chunks to process.stdout
    readableStream.on('data', (chunk) => process.stdout.write(chunk));
};

await read();
