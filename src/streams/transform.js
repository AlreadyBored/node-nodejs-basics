import { Transform } from "stream";
import { EOL } from "os";

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().replace(EOL, '').split('').reverse().join('') + EOL)
            callback();
        },
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
