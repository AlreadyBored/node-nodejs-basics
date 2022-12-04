import {createUnzip} from 'node:zlib';
import fs from 'node:fs'
const decompress = async () => {
    const input = fs.createReadStream('./src/zip/files/archive.gz');
    const ouput = fs.createWriteStream('./src/zip/files/fileToCompress.txt')
    input.pipe(createUnzip()).pipe(ouput)
};

await decompress();