/*
implement function that reads file fileToRead.txt content using Readable Stream 
and prints it"s content into process.stdout
*/

import { createReadStream } from "fs";
import { pipeline } from "stream/promises";
import { FILE_PATH_STREAM_READ } from "../common/constants.js"

const fileUrl = new URL(FILE_PATH_STREAM_READ, import.meta.url);

const read = async () => {
    await pipeline(createReadStream(fileUrl), process.stdout);
};

await read();