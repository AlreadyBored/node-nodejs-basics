//10

import fs from 'fs';

const write = async () => {
    const filename = './streams/files/fileToWrite.txt ';
    
    let writeableStream = fs.createWriteStream(filename);
    process.stdin.pipe(writeableStream);
};

await write();