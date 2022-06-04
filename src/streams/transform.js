import {Transform} from "stream"

export const transform = async () => {
    const createTransformStream = () => {
        return new Transform({
            transform(chunk, encoding, callback) {
                const reversed = chunk.toString().split("").reverse().join("");
                callback(null, reversed);
            }
        })
    }
    const stream = createTransformStream();

    process.stdin.pipe(stream).pipe(process.stdout)

};
//transform()