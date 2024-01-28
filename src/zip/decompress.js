import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

const decompress = async () => {
    await pipeline(createReadStream('./files/archive.gz'), createGunzip(), createWriteStream('./files/fileToCompress.txt'))
};

await decompress();

/*
* decompress.js - implement function that decompresses archive.gz back to the fileToCompress.txt
*  with same content as before compression using zlib and Streams API
* */
