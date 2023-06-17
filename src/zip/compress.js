import { createGzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

const compress = async () => {
    // Write your code here
    const input = createReadStream('./files/fileToCompress.txt', 'utf-8')
    const output = createWriteStream('./files/archive.gz')
    const gzip = createGzip()
    pipeline(input, gzip, output, (err) => {
        if (err) {
            console.error(err)
            process.exitCode = 1
        }
    })
};

await compress();