import fs from "fs";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import {createGzip} from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const readStream = fs.createReadStream(path.join(__dirname, "files", "fileToCompress.txt"));
const writeStream = fs.createWriteStream(path.join(__dirname, "files", "archive.gz"));
const gzip = createGzip();

const compress = async () => {
    try {
        readStream.pipe(gzip).pipe(writeStream);
    } catch (e) {
        throw new Error("FS operation failed");
    }
};

await compress();