import { open } from 'fs/promises';

const read = async () => {
    const fd = await open('src/streams/files/fileToRead.txt');

    const readableStream = fd.createReadStream({ encoding: 'utf8' });

    readableStream.on('data', (data) => {
        process.stdout.write(`${data}\n`);
    });
};

await read();
