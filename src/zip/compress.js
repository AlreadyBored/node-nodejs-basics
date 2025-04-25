import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(import.meta.dirname + "/files/fileToCompress.txt");
    const destination = createWriteStream(import.meta.dirname + "/files/archive.gz");

    await pipeline(source, gzip, destination);
};

await compress();
