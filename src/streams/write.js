import stream from "stream/promises";
import fs from 'fs';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const fileNameWrite = 'fileToWrite.txt';
    const filePathWrite = path.join(__dirname, 'files', fileNameWrite);

const soursWriteStream = fs.createWriteStream(filePathWrite)
    try {
        await stream.pipeline(
            process.stdin,
            soursWriteStream,

        )
        console.log('Pipeline is successful!')
    }catch (error) {
        throw new Error('Pipeline failed')
    }
};

await write();