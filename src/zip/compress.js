import path from 'node:path'
import zip from 'node:zlib';
import fs from 'node:fs';
import stream from 'node:stream';

const compress = async () => {
    const pathToCompress = path.resolve('src', 'zip', 'files', 'fileToCompress.txt');
    const pathToGzip = path.resolve('src', 'zip', 'files', 'archive.gz');

    const gzip = zip.createGzip();
    const source = fs.createReadStream(pathToCompress);
    const dstn = fs.createWriteStream(pathToGzip);

    stream.pipeline(source, gzip, dstn, (err) => {
        if (err) {
            console.log('GZip operation failed');
            return;
        }
        console.log('GZip operation success');
    });

};

await compress();