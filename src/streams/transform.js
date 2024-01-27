import { stdin, stdout } from "process";
import { Transform } from "stream";

const reverse = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split("").reverse().join(""));
    }
})

const transform = async () => {
    try {
        stdin.pipe(reverse).pipe(stdout);
    } catch (e) {
        console.log(e);
        throw new Error("FS operation failed");
    }
};

await transform();