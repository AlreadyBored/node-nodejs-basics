import { Transform, pipeline } from "stream";

const readable = process.stdin;
const writable = process.stdout;

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _enc, cb) {
            const chunkStringified = chunk.toString().trim();
            const reversedChunk = chunkStringified.split("").reverse().join("");
            cb(null, reversedChunk + "\n");
        },
    });
    pipeline(readable, transformStream, writable, (err) => {
        console.log("Error: ", err);
    });
};

await transform();
