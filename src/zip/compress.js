import {fileURLToPath} from "node:url";
import path from "node:path";
import {createGzip} from "node:zlib";

import {pipeline} from "node:stream";

import {createReadStream, createWriteStream} from "node:fs";


const compress = async () => {
    // Write your code here
    const fileName = 'fileToCompress.txt'
    const  zipName = 'archive.gz'
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const fullPath = path.join(__dirname, 'files', fileName)
    const fullPathZip = path.join(__dirname, 'files', zipName)



    const gzip = createGzip();
    const source = createReadStream(fullPath);
    const destination = createWriteStream(fullPathZip);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();