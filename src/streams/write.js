/*
implement function that writes process.stdin data into file fileToWrite.txt 
content using Writable Stream
*/

import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { FILE_PATH_STREAM_WRITE } from "../common/constants.js"

const fileUrl = new URL(FILE_PATH_STREAM_WRITE, import.meta.url);

const write = async () => {
    // flag "a" to append text to existed one (if existed)
    const stream = createWriteStream(fileUrl, { flags: "a" });
    await pipeline(process.stdin, stream);
};

await write();