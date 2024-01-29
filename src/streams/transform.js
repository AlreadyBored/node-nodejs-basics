import { Transform } from "stream";

const transform = async () => {

    const reverse = new Transform({
        transform(chunk, encoding, callback) {
          callback(null,  chunk.toString().split('').reverse().join(''));
        },
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();