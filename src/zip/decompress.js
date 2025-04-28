import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";

const decompress = async () => {
  const inputPath = "src/zip/files/archive.gz";
  const outputPath = "src/zip/files/fileToCompress.txt";

  try {
    await pipeline(
      createReadStream(inputPath),
      createGunzip(),
      createWriteStream(outputPath)
    );
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw error;
  }
};

await decompress();
