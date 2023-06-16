import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { getDirName } from "../utils/utils.js";
import { pipeline } from "stream/promises";

const compress = async () => {
  const srcPath = getDirName(import.meta.url) + "/files/fileToCompress.txt";
  const archPath = getDirName(import.meta.url) + "/files/archive.gz";

  await pipeline(
    createReadStream(srcPath),
    createGzip(),
    createWriteStream(archPath)
  );
};

await compress();
