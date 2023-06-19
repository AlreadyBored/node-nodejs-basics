import { createReadStream } from 'fs';

const read = async () => {
    const readableStream = createReadStream('./src/streams/files/fileToRead.txt', { encoding: 'utf8' });

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

await read();