import { stdin, stdout } from "process";
import { Transform, pipeline } from "stream";

const transform = async () => {
    const transformPipe = new Transform({
        transform(chunk, _, cb) {
            cb(null, chunk.toString().trim().split("").reverse().join(""));
        },
    });

    pipeline(stdin, transformPipe, stdout, (err) => err && console.log(err));
};

await transform();
