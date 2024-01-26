import { Transform } from "stream";

const transform = async () => {
    const reversedText = new Transform({
        transform(chunk, _, callback) {
            const reversedChunk = chunk.toString().split("").reverse().join("");
            this.push(reversedChunk);
            callback();
        },
    });

    process.stdin.pipe(reversedText).pipe(process.stdout);
};

await transform();
