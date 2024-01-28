import { createWriteStream } from 'fs';
import path from 'path';

const write = async () => {
    const filePath = path.join('src', 'streams', 'files', 'fileToWrite.txt');

    const writableStream = createWriteStream(filePath);

    process.stdin.on('data', (data) => {
        writableStream.write(data, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            }
        });
    });

    process.stdin.on('end', () => {
        writableStream.end();
    });

    writableStream.on('error', (err) => {
        console.error('Error with writable stream:', err);
    });
};

await write();