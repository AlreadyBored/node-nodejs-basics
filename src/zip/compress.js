// implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const gzip = createGzip();
    const readable = createReadStream('./files/fileToCompress.txt');
    const writable = createWriteStream('./files/archive.gz');
    
    pipeline(
        readable,
        gzip,
        writable,
        (err) => err && console.log(err)
    );
};

await compress();