import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToCompress = __dirname + "/files/fileToCompress.txt";
const archive = __dirname + "/files/archive.gz";

const compress = async () => {
    const read = fs.createReadStream(fileToCompress);
    const write = fs.createWriteStream(archive);
    const compress = zlib.createGzip();

    read.pipe(compress).pipe(write);
};

await compress();
