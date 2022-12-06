import { createGunzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
const decompress = async () => {
    // Write your code here 
    const input = createReadStream('./src/zip/files/archive.gz')
    const output = createWriteStream('./src/zip/files/fileToCompres.txt')
    const unzip = createGunzip()
    pipeline(input, unzip, output, (err) => {
        if (err) {
            console.error(err)
            process.exitCode = 1
        }
    })
};

await decompress();