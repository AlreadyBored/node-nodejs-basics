import fs from 'fs';
import { pipeline, Transform } from 'stream';
import zlib from 'zlib';

export const compress = async () => {
    // compress.js - implement function that compresses file fileToCompress.txt 
    // to archive.gz using zlib and Streams API

    const readable = await fs.createReadStream(new URL('./files/fileToCompress.txt', import.meta.url));
    const writeable = await fs.createWriteStream(new URL('./files/archive.gz', import.meta.url));

    pipeline(
        readable,
        new Transform({
            transform(chunk, encoding, callback) {
                zlib.deflate(chunk, (e, buffer) => {
                    callback(e, buffer);
                })
            }
        }),
        writeable,
        (e) => {
            if (e) {
                console.error('pipeline error', e);
            } else {
                console.log('pipeline successfull');
            }
        }
    )
};

compress();