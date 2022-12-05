import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async () => {
    const fileToCompressPath = new URL("./files/fileToCompress.txt", import.meta.url);
    const archivePath = new URL("./files/archive.gz", import.meta.url);
    const readStream = createReadStream(fileToCompressPath);
    const writeStream = createWriteStream(archivePath);
    const gzip = createGzip();
    pipeline(readStream, gzip, writeStream, err => console.error(err));
};

await compress();