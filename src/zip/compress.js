//compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import {promisify} from "util";
import { pipeline } from "stream";
import { createGzip } from "zlib";


export const compress = async () => {
    const pipe = promisify(pipeline);
    const PATH_TO_FILE =  __dirname + "/files/fileToCompress.txt";
    const PATH_TO_RESULT_FILE = __dirname + "/files/archive.gz";
    const gzip = createGzip();
    const source = fs.createReadStream(PATH_TO_FILE);
    const destination = fs.createWriteStream(PATH_TO_RESULT_FILE);
    await pipe(source, gzip, destination);

};

await compress();