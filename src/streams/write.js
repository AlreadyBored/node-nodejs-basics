import path from 'node:path'
import fs from 'node:fs';

const write = async () => {
    const pathRead = path.resolve('src', 'streams', 'files', 'fileToWrite.txt');
    const wStream = fs.createWriteStream(pathRead, { encoding: 'utf-8' });

    process.stdin.addListener('data', (data) => {
        wStream.write(data);
    });

};

await write();