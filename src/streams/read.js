import fs from "fs";
import path from 'path'
import { Stream } from "stream";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const read = async () => {
    const path = __dirname + "/files/fileToRead.txt";
    const reader = fs.createReadStream(path)
    reader.on('data', function (chunk) {
        process.stdout.write(chunk.toString());
    });

    // Variant 2

    // const readStream = Stream.Readable.from(fs.readFileSync(__dirname + "/files/fileToRead.txt"))

    // readStream.on('data', (chunk) => {
    //     process.stdout.write(chunk, 'utf-8')
    // })
};
read()