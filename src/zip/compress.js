import { createReadStream, createWriteStream } from "fs";
import { promisify } from "util";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const pipe = promisify(pipeline);

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const input = join(__dirName, "files", "fileToCompress.txt");
const output = join(__dirName, "files", "archive.gz");

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
};

await compress();
