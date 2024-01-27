import stream from "stream/promises";
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import {createReadStream} from "fs";

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const fileName = 'fileToRead.txt';
    const filePath = path.join(__dirname, 'files', fileName);
    const contentForStream = createReadStream(filePath)

    try {
        await stream.pipeline(
            contentForStream,
            process.stdout,
        )
    } catch (error) {
        throw new Error('Pipeline filed')
    }
};

await read();