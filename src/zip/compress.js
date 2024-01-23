import fs from 'fs'
import zlib from 'zlib'
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
    const fileToCompress = path.join(__dirname, './files/fileToCompress.txt')
    const compressedFileName = path.join(__dirname, './files/archive.gz')

    const readStream = await fs.createReadStream(fileToCompress)
    const writeStream = await fs.createWriteStream(compressedFileName)

    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
