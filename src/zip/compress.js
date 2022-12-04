import {createGzip} from 'node:zlib';
import fs from 'node:fs'

const compress = async () => {
    const input = fs.createReadStream('./src/zip/files/fileToCompress.txt')
    const output = fs.createWriteStream('./src/zip/files/archive.gz')
    input.pipe(createGzip()).pipe(output)
};

await compress();