import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import path from "path";

const pathToFile = path.resolve("src", "zip", "files", "fileFromCompress.txt");
const pathToZip = path.resolve("src", "zip", "files", "compress.gz");

const streamIn = createReadStream(pathToZip);
const streamUnzip = createGunzip();
const streamOut = createWriteStream(pathToFile);

const decompress = async () => {
  // Write your code here
  streamIn.pipe(streamUnzip).pipe(streamOut);
};

await decompress();
