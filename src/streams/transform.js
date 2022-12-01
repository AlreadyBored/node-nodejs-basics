import { Transform } from "stream";
import os from 'os';

const transform = async () => {
    // Write your code here
    // transform.js - implement function that reads data from process.stdin,
    // reverses text using Transform Stream and then writes it into process.stdout

    const stream = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('') + os.EOL
            callback(null, reversed)
        }
    })

    process.stdin.pipe(stream).pipe(process.stdout)
};

await transform();