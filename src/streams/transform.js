import { Transform } from 'stream';

export const transform = async () => {
    const transformStream = new Transform();

    transformStream._transform = (chunk, encoding, callback) => {
        transformStream.push(chunk.toString().split("").reverse().join("")+ '\n');
        callback();
    };

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform()