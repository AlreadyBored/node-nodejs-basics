import {createWriteStream} from 'fs';
import {fileURLToPath} from "url";
import {createCorrectPath} from "../helper.js";

const write = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const file = createCorrectPath(_filename, 'files', 'fileToWrite.txt');

    try {
        const writeStream = createWriteStream(file);
        process.stdin.on('data', (data) => {
            writeStream.write(data);
        })
    } catch (error) {}
};

await write();