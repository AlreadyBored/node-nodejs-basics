import { Transform } from "stream";

const transform = async () => {
    try {
        const transformStream = new Transform({
            transform(chunk, encoding, callback) {
                this.push(chunk.toString().split('').reverse().join(''));
                callback();
            }
        });

        process.stdin.pipe(transformStream).pipe(process.stdout, "\n");
    } catch (error) {
        console.log(error.message);
    }
};

await transform();