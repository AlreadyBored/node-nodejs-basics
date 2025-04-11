import path from 'node:path';
import fs from 'node:fs';

const read = async () => {
    const filePath = path.resolve('src/streams/files/fileToRead.txt');
    const stream = fs.createReadStream(filePath, 'utf-8');

    stream.pipe(process.stdout);
};

await read();
