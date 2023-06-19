import fs from 'fs'
import zlib from 'zlib'
import stream from 'stream'
import util from 'util'

const pipe = util.promisify(stream.pipeline);

const decompress = async () => {
    try {
        const input = new URL('files/archive.gz', import.meta.url)
        const output = new URL('files/fileToCompress.txt', import.meta.url)

        const gunzip = zlib.createGunzip();
        const source = fs.createReadStream(input);
        const destination = fs.createWriteStream(output);
        await pipe(source, gunzip, destination);
    } catch (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
};

await decompress();