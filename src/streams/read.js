import {createReadStream} from 'fs';
import {createCorrectPath} from "../helper.js";
import {fileURLToPath} from "url";

const read = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const file = createCorrectPath(_filename, 'files', 'fileToRead.txt');

    try {
        const readStream = createReadStream(file);
        readStream.on('data', (chunk) => {
            process.stdout.write(chunk.toString())
        })
    } catch (error) {}
};

await read();