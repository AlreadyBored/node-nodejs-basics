import {Transform} from "stream";
const transform = async () => {
    // Write your code here
    const textReverseTransformation =  new Transform({
        transform(chunk, encoding, callback) {
            chunk = chunk.toString().split('').reverse().join('')
            this.push(`${chunk} \n`);
            process.stdin.pause();
            callback();
        }
    });

    process.stdin.pipe(textReverseTransformation).pipe(process.stdout)
};

await transform();