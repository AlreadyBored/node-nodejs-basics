import { Transform } from"stream";
import os from "os";

const standartInput = process.stdin;
const standartOutput = process.stdout;

const transformStream = new Transform({
    transform(chunk, _, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('');
        callback(null, `${reversedChunk} ${os.EOL}`);
    }
})

const transform = async () => {
    standartInput.pipe(transformStream).pipe(standartOutput);
};

await transform();
