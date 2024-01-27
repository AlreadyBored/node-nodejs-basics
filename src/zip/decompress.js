/**
 * implement function that decompresses archive.gz back to the 
 * fileToCompress.txt with same content as before compression using zlib and Streams API
 */
import { access, constants, createReadStream, createWriteStream } from 'fs';
import { createGunzip } from "zlib";

const decompress = async () => {
    // Write your code here 
    let gzfile = './files/archive.gz';
    access(gzfile, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            return createReadStream(gzfile)
                .pipe(createGunzip())
                .pipe(createWriteStream('./files/fileToCompress.txt'))
                .on('error', () => {
                    throw new Error('FS operation failed');
                });
        }
    });
};

await decompress();