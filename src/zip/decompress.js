import fs from 'fs';
import { pipeline, Transform } from 'stream';
import zlib from 'zlib';

export const decompress = async () => {
    // decompress.js - implement function that decompresses archive.gz
    // back to the fileToCompress.txt with same content as before compression using zlib and Streams API

    const readable = await fs.createReadStream(new URL('./files/archive.gz', import.meta.url));
    const writeable = await fs.createWriteStream(new URL('./files/fileToCompressTest.txt', import.meta.url));

    pipeline(
        readable,
        new Transform({
            transform(chunk, encoding, callback) {
                zlib.inflate(chunk, (e, buffer) => {
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

decompress();