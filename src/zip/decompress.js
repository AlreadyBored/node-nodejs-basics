/*
* implement function that decompresses archive.gz back to the fileToCompress.txt
* with same content as before compression using zlib and Streams API
*/
import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const decompress = async () => {
    const filePath = './src/zip/files/fileToCompress.txt';
    const fileZip = './src/zip/files/archive.gz';

    const gunzip = createGunzip();
    const source = createReadStream(fileZip);
    const destination = createWriteStream(filePath);

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        } else {
            console.log('File was successfully decompressed!')
        }
    });
};

await decompress();