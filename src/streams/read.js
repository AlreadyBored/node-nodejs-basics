import fs from 'fs';
import { Readable } from 'stream';

const read = async () => {
    const readableStream = new Readable({
        read() {
            const readStream = fs.createReadStream('./files/fileToRead.txt');
            readStream.setEncoding('utf8');
            readStream.on('data', (data) => {
                readableStream.push(data);
                readableStream.push(null);
            })
        }
    });
    readableStream.pipe(process.stdout);
};

await read();