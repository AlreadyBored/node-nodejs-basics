import { createGzip } from "node:zlib"
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async () => {
    // Write your code here 
    const gzip = createGzip();
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const source = createReadStream(__dirname + '/files/fileToCompress.txt');
    const destination = createWriteStream(__dirname + '/files/archive.gz');
    source.pipe(gzip).pipe(destination)
    console.log(`file archived!!!`)

};

await compress();