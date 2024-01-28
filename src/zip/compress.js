import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
    await pipeline(createReadStream('./files/fileToCompress.txt'), createGzip(), createWriteStream('./files/archive.gz'))
};

await compress();

/*
implement function that compresses file fileToCompress.txt
 to archive.gz using zlib and Streams API
* */
