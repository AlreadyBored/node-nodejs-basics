import * as fs from "fs";
import { getPath } from '../utils/getPath.js';

const {stdout} = process;

const read = async () => {
    const src = getPath(import.meta.url, "fileToRead.txt");
    const readStream = fs.createReadStream(src, 'utf-8');

    readStream.on ('data', chunk => stdout.write(chunk));
};

await read();