import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

export const decompress = async () => {
  // Write your code here
  pipeline(
    createReadStream("files/archive.gz"),
    createGunzip(),
    createWriteStream("files/fileToCompress.txt"),
    (err) => {
      if (err) {
        console.error("An error occurred:", err);
        process.exitCode = 1;
      }
    }
  );
};
