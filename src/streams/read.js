import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import {pipeline} from "stream/promises";

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const readStream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);

    try {
        await pipeline(
            readStream,
            process.stdout
        );
    } catch (error) {
        console.log('Stream error occurred');
    }
};

await read();