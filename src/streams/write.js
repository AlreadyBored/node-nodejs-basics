import fs from 'fs';
import path from 'path';

const toWrite = path.resolve(path.dirname(''), 'src', 'streams', 'files', 'fileToWrite.txt');

export const write = async () => {
    const stream = fs.WriteStream(toWrite, 'utf8');

    process.stdin.on('readable', data => {
        while ((data = process.stdin.read()) !== null) {
            stream.write(data);
        }
    });

    process.on('exit', (code) => {
        console.log('Great! See you later :)');
    });
};

write();