import { Transform, pipeline } from "stream";
import process from "process";

const transform = async () => {
    let transformData = new Transform({
        transform(chunk, encoding, callback){
            callback(null, chunk.toString().trim().split("").reverse().join(""))
        }
    });

    pipeline(
        process.stdin,
        transformData,
        process.stdout,
        err => console.log(err)
    )
};

await transform();