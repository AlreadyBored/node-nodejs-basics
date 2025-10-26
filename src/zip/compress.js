import path from "path";
import { createGzip } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import { pipeline } from "stream/promises";

import { getDirName } from "../utils.js";

const __dirname = getDirName(import.meta.url);

const dirPath = path.join(__dirname, "files");
const filePath = path.join(dirPath, "fileToCompress.txt");
const archivePath = path.join(dirPath, "archive.gz");

const gZip = createGzip();
const source = createReadStream(filePath);
const destination = createWriteStream(archivePath);

const compress = async () => {
  try {
    await pipeline(source, gZip, destination);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
};

await compress();
