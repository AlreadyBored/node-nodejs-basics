import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createGzip } from "zlib";
import { join } from "path";

import { getPath } from "./../fs/utils/fs.js";

const basePath = getPath("zip", "files");

const compress = async () => {
    const readableStream = createReadStream(
        join(basePath, "fileToCompress.txt")
    );
    const gzipPipe = createGzip();
    const writableStream = createWriteStream(join(basePath, "archive.gz"));

    pipeline(
        readableStream,
        gzipPipe,
        writableStream,
        (err) => err && console.log(err)
    );
};

await compress();
