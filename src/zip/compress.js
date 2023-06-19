import {pipeline} from 'stream'
import {promisify} from 'node:util'
import {createGzip} from 'zlib'
import {createReadStream, createWriteStream} from 'fs'
const compress = async () => {
    // Write your code here
    const pipe = promisify(pipeline);
    const fileToCompressPath = './files/fileToCompress.txt'
    const destinationPath = './files/archive.gz'

    async function do_gzip(input, output) {
        const gzip = createGzip();
        const source = createReadStream(input);
        const destination = createWriteStream(output);
        await pipe(source, gzip, destination);
    }

    await do_gzip(fileToCompressPath, destinationPath)
};

await compress();