import fs from 'fs';


export const read = async () => {
    const readStream = fs.createReadStream('./files/fileToRead.txt');

    await readStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

read();