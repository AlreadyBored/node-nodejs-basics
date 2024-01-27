/**
 * implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
 */
import { access, constants, createReadStream, createWriteStream } from 'fs';
import { createGzip } from "zlib";

const compress = async () => {
    // Write your code here 
    let infile = './files/fileToCompress.txt';
    access(infile, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            return createReadStream(infile)
                .pipe(createGzip())
                .pipe(createWriteStream('./files/archive.gz'))
                .on('error', () => {
                    throw new Error('FS operation failed');
                });
        }
    });

};

await compress();