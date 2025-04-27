import fs from "fs";

const transform = new Transform({
    transform(chunk, encoding, callback) {
        const reversed = chunk.toString().split('').reverse().join('');
        this.push(reversed);
        callback();
    }
});

const transformText = async () => {
    process.stdin
        .pipe(reverseTransform)
        .pipe(process.stdout);
};

await transform();
