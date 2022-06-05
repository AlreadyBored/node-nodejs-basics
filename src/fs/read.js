import * as fs from "fs";

export const read = async () => {

    const stream = fs.createReadStream('./src/fs/files/fileToRead.txt');
    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })

    stream.on('error', function(err) {
       console.error('FS operation failed');
    });

};
read();