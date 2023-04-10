import fs from 'fs';

const read = async () => {
    // Create readable stream
    const readableStream = fs.createReadStream('./files/fileToRead.txt', {
        encoding: 'utf8',
    });

    // Handle data event and write chunks to the console
    readableStream.on('data', (chunk) => process.stdout.write(chunk));
};

await read();
