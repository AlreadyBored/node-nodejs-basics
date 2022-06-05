import fs from 'fs';

export const read = async () => {
    const readStream = fs.createReadStream('./files/fileToRead.txt');
    readStream.on('data', chunk => {
        process.stdout.write(chunk);
        readStream.destroy();
    });
};

await read();