import fs from 'fs'
import zlib from 'zlib'
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
    const unpackedPathToFile = path.join(__dirname, './files/fileToCompress1.txt')
    const decompressesPathToFile = path.join(__dirname, './files/archive.gz')

    const readStream = await fs.createReadStream(decompressesPathToFile)
    const writeStream = await fs.createWriteStream(unpackedPathToFile)

    const gzipStream = zlib.createGunzip();

    readStream.pipe(gzipStream).pipe(writeStream);
};

await decompress();