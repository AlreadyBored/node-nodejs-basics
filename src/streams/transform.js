import { Transform } from 'stream';
import { pipeline } from "stream/promises";
import { createWriteStream } from "fs";

const transform = async () => {
    const reversed = (str) => str.split("").reverse().join("");
    const params = {
        transform(chunk, _, callback) {
            callback(null, reversed(chunk.toString()))
        }
    }
    const transformSt = new Transform(params)
    await pipeline(process.stdin, transformSt, process.stdout)
};

await transform();

/*
* transform.js - implement function that reads data from process.stdin,
*  reverses text using Transform Stream and then writes it into process.stdout
*
* */
