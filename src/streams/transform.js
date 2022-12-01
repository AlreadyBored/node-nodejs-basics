import {Transform, pipeline} from "node:stream"

const transform = async () => {
    // Write your code here
    const readble = process.stdin
    const writetable = process.stdout
    const reverse = new Transform({
        transform(chunk, enc, cb) {
            const data = chunk.toString().trim()
            const reverseData = data.split("").reverse().join("")
            cb(null,reverseData + "\n")
        }
    })

    pipeline(readble, reverse, writetable, (err) => {
        if(err){
            throw new Error("Stream operation failed")
        }
    })
};

await transform();