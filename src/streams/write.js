import fs from 'fs';

const write = async () => {
    // Write your code here

    const path = new URL('./files/fileToWrite.txt', import.meta.url);

    const writeSrc = fs.createWriteStream(path, { flags: 'a'});
    process.stdin.pipe(writeSrc);
};

await write();