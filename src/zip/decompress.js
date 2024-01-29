import fs from "fs";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import { createUnzip } from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const readStream = fs.createReadStream(path.join(__dirname, "files", "archive.gz"));
const writeStream = fs.createWriteStream(path.join(__dirname, "files", "fileToCompress.txt"));
const unGzip = createUnzip();

const decompress = async () => {
    try {
        readStream.pipe(unGzip).pipe(writeStream);
    } catch (e) {
        throw new Error("FS operation failed");
    }
};

await decompress();