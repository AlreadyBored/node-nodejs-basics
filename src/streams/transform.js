import * as fs from 'fs';
import {Transform} from 'stream'
export const transform = async () => {
    const rotateTextStream = () =>{
        return new Transform({
            transform(chunk, encoding, callback) {
                const rotate = chunk.toString().split("").reverse().join("");
                callback(null,rotate)

            }
        })
    }
    const rotatedText = rotateTextStream()
    process.stdin.pipe(rotatedText).pipe(process.stdout).toString()
};
transform()