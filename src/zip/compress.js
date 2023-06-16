/*
 implement function that compresses file fileToCompress.txt 
 to archive.gz using zlib and Streams API
*/

import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { FILE_TO_COMPRESS, ARCHIVE } from "../common/constants.js"

const compress = async () => {
    await pipeline(
        createReadStream(FILE_TO_COMPRESS),
        createGzip(),
        createWriteStream(ARCHIVE)
    );
};

await compress();