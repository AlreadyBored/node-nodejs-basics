import fs from 'fs';

// fs.ReadStream inherits from stream.Readable
export const read = async () => {
    const path = './files/fileToRead.txt';
    let stream = new fs.ReadStream(path, { encoding: 'utf-8' });

    stream.on('data', chunk => {
        process.stdout.write(chunk);
    });
};