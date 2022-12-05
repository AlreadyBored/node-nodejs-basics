import fs from 'fs';

export const read = async() => {
    let data = [];
    const readStream = fs.createReadStream('files/fileToRead.txt')
    readStream.on('data', (chunk) => {
        data.push(chunk.toString());
    });
    readStream.on('end', () => process.stdout.write(data.join('')));
};
read();