import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import path from "path";
import {fileURLToPath} from "url";
import zlib from "node:zlib";
import fs from "fs";

const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    try {
        await pipeline(
            fs.createReadStream(`${__dirname}/files/fileToCompress.txt`),
            zlib.createGzip(),
            fs.createWriteStream(`${__dirname}/files/archive.gz`)
        );
    } catch (error) {
        throw new Error('Compression finished with error');
    }
};

await compress();