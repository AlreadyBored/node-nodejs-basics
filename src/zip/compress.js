import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";

const compress = async () => {
  const inputPath = "src/zip/files/fileToCompress.txt";
  const outputPath = "src/zip/files/archive.gz";

  try {
    await pipeline(
      createReadStream(inputPath),
      createGzip(),
      createWriteStream(outputPath)
    );
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw error;
  }
};

await compress();
