import path from "path";
import {fileURLToPath} from "url";
import fs from "fs";
import {pipeline} from "stream/promises";

const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const writeStream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);

    try {
        await pipeline(
            process.stdin,
            writeStream
        );
    } catch (error) {
        console.log('Stream error occurred');
    }
};

await write();