import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";

export const compress = async (process, filePath, destination) => {
  const fileStream = createReadStream(filePath);
  const brotliCompress = zlib.createBrotliCompress();
  const writeStream = createWriteStream(destination);

  fileStream
    .pipe(brotliCompress)
    .pipe(writeStream)
    .on("finish", () => {
      console.log(`File '${filePath}' compressed to '${destination}'`);
    })
    .on("error", (err) => {
      console.log("Error during compression:", err.message);
    });
};
