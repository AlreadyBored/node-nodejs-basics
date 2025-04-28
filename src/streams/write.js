import fs from 'node:fs';
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {pipeline} from "node:stream/promises";

const FILE_NAME = 'fileToWrite.txt';
const DIR_NAME = 'files';

const write = async () => {
    const dirName = dirname(fileURLToPath(import.meta.url));
    const filePath = join(dirName, DIR_NAME, FILE_NAME);

    const stream = fs.createWriteStream(filePath);

    try {
        await pipeline(process.stdin, stream);
    } catch (error) {
        console.error('Error during the streaming process:', error);
    }
};

await write();
