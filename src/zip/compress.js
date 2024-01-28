// implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API

import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const sourceFilePath = path.join(__dirname, "files", "fileToCompress.txt");
  const destinationFilePath = path.join(__dirname, "archive.gz");

  const gzip = zlib.createGzip();
  const source = fs.createReadStream(sourceFilePath);
  const destination = fs.createWriteStream(destinationFilePath);

  try {
    await pipeline(source, gzip, destination);
    console.log("File compressed successfully");
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

await compress();
