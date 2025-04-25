import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";

const decompress = async () => {
  try {
    const readStream = fs.createReadStream("archive.gz");

    const writeStream = fs.createWriteStream("fileToCompress.txt");

    const gunzip = zlib.createGunzip();

    await pipeline(readStream, gunzip, writeStream);

    console.log("File successfully decompressed to fileToCompress.txt");
  } catch (error) {
    console.error("An error occurred during decompression:", error);
    throw error;
  }
};

await decompress();
