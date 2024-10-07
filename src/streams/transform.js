import * as fs from 'fs';
import * as process from 'process';
import * as path from 'path';
import { Transform } from 'stream';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files', 'fileToRead.txt');
const reverse = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().split('').reverse().join(''));
        callback();
    }
});
const transform = async () => {
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();