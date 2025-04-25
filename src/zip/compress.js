import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";

const compress = async () => {
  try {
    const readStream = fs.createReadStream("files/fileToCompress.txt");

    const writeStream = fs.createWriteStream("archive.gz");

    const gzip = zlib.createGzip();

    await pipeline(readStream, gzip, writeStream);

    console.log("File successfully compressed to archive.gz");
  } catch (error) {
    console.error("An error occurred during compression:", error);
    throw error;
  }
};

await compress();
