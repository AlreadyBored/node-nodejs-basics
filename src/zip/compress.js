import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

export const compress = async () => {
  // Write your code here
  pipeline(
    createReadStream("files/fileToCompress.txt"),
    createGzip(),
    createWriteStream("files/archive.gz"),
    (err) => {
      if (err) {
        console.error("An error occurred:", err);
        process.exitCode = 1;
      }
    }
  );
};
