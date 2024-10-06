import { promisify } from "util";
import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
import { pipeline } from "stream";
import { resolve } from "path";

const pipe = promisify(pipeline);

const sourcePath = resolve("./src/zip/files/archive.gz");
const destPath = resolve("./src/zip/files/fileToCompress.txt");

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destPath);
  try {
    await pipe(source, unzip, destination);
  } catch (error) {
    console.error("There is an error in decompressing the file", error.message);
  }
};

await decompress();
