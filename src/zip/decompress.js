//  implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    const gunzip = createGunzip()
    const readable = createReadStream('./files/archive.gz')
    const writable = createWriteStream('./files/fileToCompress.txt')

    pipeline(
        readable,
        gunzip,
        writable,
        (err) => err && console.log(err)
    )
};

await decompress();