import fs from 'fs';

export const read = async () => {
    const readStream = fs.createReadStream('src/streams/files/fileToRead.txt', 'utf8');
    let data = '';

    readStream.on('data', (chunk) => {
        data += chunk
    });

    readStream.on('end', () => console.log('task comlited, data:', data));
};

read();
