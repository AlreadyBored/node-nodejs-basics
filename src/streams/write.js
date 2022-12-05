import fs from 'fs';
import { pipeline } from 'stream';

const write = async () => {
    // Write your code here
    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        const outputStream = fs.createWriteStream("files/fileToWrite.txt");
        pipeline(chunk, outputStream, (err) => {
            err && console.error(err);
        });
    }
    });
};

await write();