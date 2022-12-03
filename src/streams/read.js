import process from 'node:process';
import fs from 'node:fs';

const read = async () => {
    let stream = fs.createReadStream('./files/fileToRead.txt');
    stream.on('data', (chunk) => {
        process.stdout.write(chunk.toString())
    })
    stream.on('error', () => {
        throw new Error('Stream error')
    })
};

await read();