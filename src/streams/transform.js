import {Transform} from "stream";


const transform = async () => {
    // Write your code here
    const transformStream = new Transform({transform(chunk, encoding, callback) {
            callback(null, chunk.reverse());
        },})
    process.stdin.pipe(transformStream).pipe(process.stdout)
};

await transform();