import fs from 'fs';
import {stdout} from 'process';

export const read = async () => {

    const readStream = fs.createReadStream('./files/fileToRead.txt', 'utf-8');
    let data = '';
    readStream.on('data', (chunk) => (data += chunk));
    readStream.on('end', () => stdout.write(data));
    readStream.on('error', (error) => console.log('Error', error.message));
};

read()
