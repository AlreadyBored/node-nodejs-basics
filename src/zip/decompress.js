import fs from 'fs'
import zlib from 'zlib'

const destination = "./src/zip/files/fileToCompress.txt"
const source = "./src/zip/files/archive.gz"

const decompress = async () => {
    const input = fs.createReadStream(source);
    const output = fs.createWriteStream(destination);
    const zip = zlib.createUnzip(); 

    input.pipe(zip).pipe(output);
};

await decompress();