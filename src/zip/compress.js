import { promisify } from "util";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import { resolve } from "path";

const pipe = promisify(pipeline);

const sourcePath = resolve("./src/zip/files/fileToCompress.txt");
const destPath = resolve("./src/zip/files/archive.gz");
const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destPath);
  try {
    await pipe(source, gzip, destination);
  } catch (error) {
    console.error("There is an error in compressing the file", error.message);
  }
};

await compress();
