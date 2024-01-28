import { createReadStream } from 'fs';
import path from 'path';

const read = async () => {
    const filePath = path.join('src', 'streams', 'files', 'fileToRead.txt');

    const rs = createReadStream(filePath);

    rs.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    rs.on('error', (err) => {
        console.error('Error reading file:', err);
    });

    rs.on('end', () => {
        console.log('No more data to read.');
    });

    rs.on('close', () => {
        console.log('Stream closed.');
    });
};

await read();