import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { promisify } from "node:util";

const decompress = async () => {
    const gzip = createGunzip();
    const source = createReadStream(import.meta.dirname + "/files/archive.gz");
    const destination = createWriteStream(import.meta.dirname + "/files/fileToCompress.txt");

    await pipeline(source, gzip, destination);
};

await decompress();
