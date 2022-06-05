import { Transform } from "stream";

export const transform = async () => {
    const transformStream = new Transform();
    transformStream._transform = (chunk, endcoding, callback) => {
        transformStream.push(chunk.reverse(), + "\n");
        callback();
    }
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

transform()
