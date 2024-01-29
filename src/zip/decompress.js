import {pipeline} from 'stream'
import {promisify} from 'node:util'
import {createGunzip} from 'zlib'
import {createReadStream, createWriteStream} from 'fs'

const decompress = async () => {
    // Write your code here
    const pipe = promisify(pipeline);
    const fileToCompressPath = './files/fileToCompress.txt'
    const fileToDecompressPath = './files/archive.gz'

    async function do_gunzip(input, output) {
        const gunzip = createGunzip();
        const source = createReadStream(input);
        const destination = createWriteStream(output);
        await pipe(source, gunzip, destination);
    }

    await do_gunzip(fileToDecompressPath, fileToCompressPath)
};

await decompress();