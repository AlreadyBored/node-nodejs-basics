import { Transform } from 'stream';

export const transform = async () => {

    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split("").reverse().join(""));
            callback();
        }
    });
    //
    process.stdin.on('data', data => {
        reverseTransform.write(data);
    });

    for await (const chunk of reverseTransform) {
        process.stdout.write(chunk);
    }

};

await transform();