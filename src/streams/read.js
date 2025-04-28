import fs from 'node:fs';
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {pipeline} from "node:stream/promises";

const FILE_NAME = 'fileToRead.txt';
const DIR_NAME = 'files';

const read = async () => {
    const dirName = dirname(fileURLToPath(import.meta.url));
    const filePath = join(dirName, DIR_NAME, FILE_NAME);

    const stream = fs.createReadStream(filePath);

    try {
        await pipeline(stream, process.stdout);
    } catch (error) {
        console.error('Error during the streaming process:', error);
    }

};

await read();
