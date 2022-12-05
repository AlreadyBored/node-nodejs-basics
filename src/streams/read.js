//10

import fs from 'fs';

const read = async () => {
    
    const filename = './streams/files/fileToRead.txt';
    let readableStream = fs.createReadStream(filename, 'utf8');

    readableStream.on('data', function(chunk) { 
        process.stdout.write(chunk);
    });
};

await read();