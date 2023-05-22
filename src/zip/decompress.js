import path from "path";
import {fileURLToPath} from "url";
import {pipeline} from "stream/promises";
import fs from "fs";
import zlib from "node:zlib";

const decompress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    try {
        await pipeline(
            fs.createReadStream(`${__dirname}/files/archive.gz`),
            zlib.createGunzip(),
            fs.createWriteStream(`${__dirname}/files/fileToCompress.txt`)
        );
    } catch (error) {
        throw new Error('Decompression finished with error');
    }
};

await decompress();