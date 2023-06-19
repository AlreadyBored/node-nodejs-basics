import { Transform } from "stream";

const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
        let l = 0,
            r = chunk.length - 2;
        while (l < r) {
            let t = 0;
            t = chunk[r];
            chunk[r--] = chunk[l];
            chunk[l++] = t;
        }
        this.push(chunk);
        callback();
    }
});



const transform = async () => {
    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();