import fs from 'fs';
import zlib from 'zlib';
import stream from 'stream';

const compress = async () => {
    const sourcePath = 'src/zip/files/fileToCompress.txt';
    const destPath = 'src/zip/files/archive.gz';
    const sourceStream = fs.createReadStream(sourcePath);
    const destStream = fs.createWriteStream(destPath);
    const gzip = zlib.createGzip();

    stream.pipeline(sourceStream, gzip, destStream, (err) => {
        if (err) throw err;
    });
};

await compress();
