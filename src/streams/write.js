import path from 'path';
import fs from 'fs';

export const write = async () => {
    const output =  fs.createWriteStream(path.join(path.resolve(), 'files', 'fileToWrite.txt'), 'utf-8');
    let text = '';
    process.stdin.on('data', (data) => output.write(data.toString()));

};
