/**
 * implement function that decompresses archive.gz back to the 
 * fileToCompress.txt with same content as before compression using zlib and Streams API
 */
import { access, constants, createReadStream, createWriteStream } from 'fs';
import { createGunzip } from "zlib";
import { join as platform_path } from 'path';

const decompress = async () => {
    // Write your code here 
    let gzfile = platform_path('files', 'archive.gz');
    access(gzfile, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            return createReadStream(gzfile)
                .pipe(createGunzip())
                .pipe(createWriteStream(platform_path('files', 'fileToCompress.txt')))
                .on('error', () => {
                    throw new Error('FS operation failed');
                });
        }
    });
};

await decompress();