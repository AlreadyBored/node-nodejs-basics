import { open } from 'fs/promises';

const write = async () => {
    const fd = await open('src/streams/files/fileToWrite.txt', 'w');

    const writeStream = fd.createWriteStream({encoding: 'utf-8'});
    process.stdin.on('data', (data) => {
        writeStream.write(data);
    });
};

await write();
