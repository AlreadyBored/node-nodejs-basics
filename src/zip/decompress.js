import fs from 'fs'
import zlib from 'zlib'

const decompress = async () => {
    const unpackedPathToFile = './files/fileToCompress1.txt'
    const decompressesPathToFile = './files/archive.gz'

    const readStream = await fs.createReadStream(decompressesPathToFile)
    const writeStream = await fs.createWriteStream(unpackedPathToFile)

    const gzipStream = zlib.createGunzip();

    readStream.pipe(gzipStream).pipe(writeStream);
};

await decompress();