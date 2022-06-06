import { readFile } from 'fs/promises';
import path from 'path';
import fs from 'fs';

export const read = async () => {
    const filePath = path.join(path.resolve(), 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(filePath, 'utf-8');

    let textResult = '';


    readStream.on('data', (chunk) => textResult += chunk);
    readStream.on('end', () => process.stdout.write(textResult));
    readStream.on('error', (error) => console.log('Error', error.message))
};

read()
