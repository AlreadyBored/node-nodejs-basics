import fs from 'fs';
import asyncFs from "fs/promises";
import path from "path";
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
    // Write your code here
    const readStream = fs.createReadStream(path.join(__dirname, 'files','fileToRead.txt'), {encoding:'utf-8'});
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    })
};

await read();