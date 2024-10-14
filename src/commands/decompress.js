import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";

export const decompress = async (process, filePath, destination) => {
  const fileStream = createReadStream(filePath);
  const brotliDecompress = zlib.createBrotliDecompress();
  const writeStream = createWriteStream(destination);

  fileStream
    .pipe(brotliDecompress)
    .pipe(writeStream)
    .on("finish", () => {
      console.log(`File '${filePath}' decompressed to '${destination}'`);
    })
    .on("error", (err) => {
      console.log("Error during decompression:", err.message);
    });
};
