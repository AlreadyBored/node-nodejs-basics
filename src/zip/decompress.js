import path from "path";
import { createUnzip } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import { pipeline } from "stream/promises";

import { getDirName } from "../utils.js";

const __dirname = getDirName(import.meta.url);

const dirPath = path.join(__dirname, "files");
const filePath = path.join(dirPath, "fileToCompress.txt");
const archivePath = path.join(dirPath, "archive.gz");

const unZip = createUnzip();
const source = createReadStream(archivePath);
const destination = createWriteStream(filePath);

const decompress = async () => {
  try {
    await pipeline(source, unZip, destination);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
};

await decompress();
