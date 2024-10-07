const fs = require('fs');
const { Writable } = require('stream');

const write = async () => {
    const writableStream = fs.createWriteStream('fileToWrite.txt');

    return new Promise((resolve, reject) => {
        process.stdin.pipe(writableStream);
        
        writableStream.on('finish', () => {
            resolve();
        });

        writableStream.on('error', (err) => {
            reject(err);
        });
    });
};

await write();
