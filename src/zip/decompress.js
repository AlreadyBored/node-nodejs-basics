import fs from "fs";
import zlib from "node:zlib";

const decompress = async () => {
    const read = fs.createReadStream('src/zip/files/archive.gz');
    const write = fs.createWriteStream('src/zip/files/fileToCompress.txt');
    const unZip = zlib.createGunzip();
    read.pipe(unZip).pipe(write);
};

await decompress();
