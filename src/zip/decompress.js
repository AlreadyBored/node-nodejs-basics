import { createGunzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
const decompress = async () => {
    // Write your code here 
    const input = createReadStream('./files/archive.gz')
    const output = createWriteStream('./files/fileToCompress.txt')
    const unzip = createGunzip()
    pipeline(input, unzip, output, (err) => {
        if (err) {
            console.error(err)
            process.exitCode = 1
        }
    })
};

await decompress();