// implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API

import fs from "fs";
import zlib from "zlib";
import { promisify } from "util";
import stream from "stream";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pipeline = promisify(stream.pipeline);

const decompress = async () => {
  const srcPath = path.join(__dirname, "archive.gz");
  const destPath = path.join(__dirname, "files", "fileToCompress.txt");

  const gunzip = zlib.createGunzip();

  try {
    await pipeline(
      fs.createReadStream(srcPath),
      gunzip,
      fs.createWriteStream(destPath)
    );
    console.log("Decompression complete.");
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

await decompress();
