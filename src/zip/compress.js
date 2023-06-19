import fs from 'fs'
import zlib from 'zlib'

const compress = async () => {
    const fileToCompress = './files/fileToCompress.txt'
    const compressedFileName = './files/archive.gz'

    const readStream = await fs.createReadStream(fileToCompress)
    const writeStream = await fs.createWriteStream(compressedFileName)

    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
