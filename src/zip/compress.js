import fs from "fs";
import zlib from "zlib";

const compress = async () => {
    const dir = 'src/zip/files/'
    const targetFileName = 'fileToCompress.txt'
    const targetFileArchiveName = 'archive.gz'
    const readStream = fs.createReadStream(dir + targetFileName);
    const writeStream = fs.createWriteStream(targetFileArchiveName);
    const gzipStream = zlib.createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
