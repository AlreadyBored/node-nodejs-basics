// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import { appendFile } from 'node:fs';
import { Writable } from 'node:stream';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToWritePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');
    const writable = new Writable({
        write(chunk, encoding, callback) {
            if(chunk !== null) {
                appendFile(fileToWritePath, chunk, (err) => err && console.log(err));
                callback();
            }
        }
    });
    process.stdin.pipe(writable);
};

await write();