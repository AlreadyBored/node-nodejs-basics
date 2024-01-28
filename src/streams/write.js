import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';

const write = async () => {
    const file = './files/fileToWrite.txt';
    try {
        const streamW = createWriteStream(file);
        await pipeline(process.stdin, streamW);
        streamW.end();
    } catch (err) {
        console.error(err);
    }
};

await write();

/* write.js - implement function that writes process.stdin data
 into file fileToWrite.txt content using Writable Stream

 */
