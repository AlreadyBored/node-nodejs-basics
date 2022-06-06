import fs from 'fs';

export const read = async () => {
    const readStream = await fs.createReadStream('./files/fileToRead.txt')
    readStream
    .setEncoding('utf8')
    .on('data', (chank) => {
        process.stdout.write(chank)
    })
};

read()