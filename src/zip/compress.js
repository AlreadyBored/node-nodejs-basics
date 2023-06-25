import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import path from "path";

const pathToFile = path.resolve("src", "zip", "files", "fileToCompress.txt");
const pathToZip = path.resolve("src", "zip", "files", "compress.gz");

const streamIn = createReadStream(pathToFile);
const streamZip = createGzip();
const streamOut = createWriteStream(pathToZip);

const compress = async () => {
  // Write your code here
  streamIn.pipe(streamZip).pipe(streamOut);
};

await compress();
