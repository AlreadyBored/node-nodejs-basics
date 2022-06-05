import { open } from 'node:fs/promises';

export const read = async () => {
    const fd = await open('./src/streams/files/fileToRead.txt');
    const stream = fd.createReadStream();

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })
};

read();