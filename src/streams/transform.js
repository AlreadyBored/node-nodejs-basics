import { EOL } from "os";
import { Transform, pipeline } from "stream";


const transform = async () => {
    // Write your code here 
    // let stdinData = process.stdin;
    // const transformer = new Transform()
    // transformer._transform(stdinData, )
    const reverser = new Transform({
        transform(chunk, encoding, callback) {
            callback(
                null,
                chunk.toString().replace(EOL, "").split("").reverse().join("") + EOL
            );
        },
    });
    pipeline(
        process.stdin,
        reverser,
        process.stdout,
        (err) => {
            throw new Error(err);
        }
    )
};

await transform();