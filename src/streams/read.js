import fs from 'fs';

const read = async () => {
    // Write your code here

    const path = new URL('./files/fileToRead.txt', import.meta.url);

    const readableSrc = fs.createReadStream(path);
    readableSrc.pipe(process.stdout);
};

await read();