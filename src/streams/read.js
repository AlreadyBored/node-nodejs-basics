import fs from 'fs';

const read = async () => {
    await fs.createReadStream('./src/streams/files/fileToRead.txt').setEncoding('utf8').pipe(process.stdout)
};

await read();