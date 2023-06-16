/*
implement function that decompresses archive.gz back to the fileToCompress.txt 
with same content as before compression using zlib and Streams API
*/

import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { FILE_TO_COMPRESS, ARCHIVE } from "../common/constants.js"

const decompress = async () => {
    await pipeline(
        createReadStream(ARCHIVE),
        createGunzip(),
        createWriteStream(FILE_TO_COMPRESS)
    );
};

await decompress();