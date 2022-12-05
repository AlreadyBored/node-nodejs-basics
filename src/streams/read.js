import {stdin, stdout} from 'node:process';
import {Readable} from 'stream';
import fs from 'fs';

const read = async () => {
    const path = './src/streams/files/fileToRead.txt';
    const rStream = fs.createReadStream(path);
    const chunks = [];
    let res = [];
    rStream.on('data', chunk => {
        chunks.push(chunk);
    });

    rStream.on('end', () => {
        // res.send(Buffer.concat(chunks));
        process.stdout.write(chunks);

    });
};

await read();