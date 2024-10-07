/*
* implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
*/
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const compress = async () => {
    const filePath = './src/zip/files/fileToCompress.txt';
    const fileZip = './src/zip/files/archive.gz';

    const gzip = createGzip();
    const source = createReadStream(filePath);
    const destination = createWriteStream(fileZip);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        } else {
            console.log('File was successfully compressed!')
        }
    });
};

await compress();