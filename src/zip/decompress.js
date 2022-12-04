import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createGunzip } from "zlib";
import { join } from "path";

import { getPath } from "./../fs/utils/fs.js";

const basePath = getPath("zip", "files");

const decompress = async () => {
    const readableStream = createReadStream(join(basePath, "archive.gz"));
    const writableStream = createWriteStream(
        join(basePath, "fileToCompress.txt")
    );
    const zipPipe = createGunzip();

    pipeline(
        readableStream,
        zipPipe,
        writableStream,
        (err) => err && console.log(err)
    );
};

await decompress();
