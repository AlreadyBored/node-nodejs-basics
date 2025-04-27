import fs from "fs";
import * as zlib from "node:zlib";

const compress = async () => {
    const read = fs.createReadStream('src/zip/files/fileToCompress.txt');
    const write = fs.createWriteStream('src/zip/files/archive.gz');
    const zip = zlib.createGzip();

    read.pipe(zip).pipe(write);

    return new Promise((resolve, reject) => {
        read.pipe(zip).pipe(write)
            .on('finish', () => {
                resolve();
            })
            .on('error', (err) => {
                reject(err);
            });
    });
};

await compress();
