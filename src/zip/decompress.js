import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToDecompress = __dirname + "/files/archive.gz";
const text = __dirname + "/files/fileToCompress.txt";

const decompress = async () => {
    const read = fs.createReadStream(fileToDecompress);
    const write = fs.createWriteStream(text);
    const decompress = zlib.Gunzip();

    read.pipe(decompress).pipe(write);
};

await decompress();
