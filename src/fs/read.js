import readline from "readline";
import events from "events";
import {createReadStream} from 'fs';
import {dirname} from "../utils/dir.js";

const read = async () => {
    try {
        const __dirname = dirname(import.meta.url);

        const readLine = readline.createInterface({
            input: createReadStream(`${__dirname}/files/fileToRead.txt`)
        });

        readLine.on('line', line => console.log(line));

        await events.once(readLine, 'close');
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await read();