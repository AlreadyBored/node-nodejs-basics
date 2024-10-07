import path from 'node:path'
import zip from 'node:zlib';
import fs from 'node:fs';
import stream from 'node:stream';

const decompress = async () => {
    const pathToDecompress = path.resolve('src', 'zip', 'files', 'fileToCompress1.txt');
    const pathToGzip = path.resolve('src', 'zip', 'files', 'archive.gz');

    const createReadStream = fs.createReadStream(pathToGzip);
    const writeStream = fs.createWriteStream(pathToDecompress);
    const unzip = zip.createGunzip()

    createReadStream.pipe(unzip).pipe(writeStream)
    stream.pipeline(createReadStream, unzip, writeStream, (err) => {
        if (err) {
            console.log('GUNZip operation failed');
            return;
        }
        console.log('GUNZip operation success');
    })

};

await decompress();