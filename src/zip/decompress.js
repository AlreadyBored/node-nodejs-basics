import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
    const fileToCompressPath = new URL("./files/fileToCompress.txt", import.meta.url);
    const archivePath = new URL("./files/archive.gz", import.meta.url);
    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(fileToCompressPath);
    const gunzip = createGunzip();
    pipeline(readStream, gunzip, writeStream, err => console.error(err));
};

await decompress();