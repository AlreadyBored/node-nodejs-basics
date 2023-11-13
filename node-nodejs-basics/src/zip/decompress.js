import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { createGunzip } from "zlib";

const decompress = async () => {
  const inputFileName = "archive.gz";
  const outputFileName = "fileToCompress.txt";

  const currentDir = path.resolve("src", "zip", "files");
  const inputFilePath = path.join(currentDir, inputFileName);
  const outputFilePath = path.join(currentDir, outputFileName);

  const compressedStream = createReadStream(inputFilePath);
  const outputStream = createWriteStream(outputFilePath);
  const gunzipStream = createGunzip();

  compressedStream.pipe(gunzipStream).pipe(outputStream);

  return new Promise((res, rej) => {
    outputStream.on("error", (err) => {
      rej(err);
    });

    outputStream.on("finish", () => {
      console.log(
        `File decompressed successfully. Result saved to ${outputFilePath}`
      );
      res();
    });
  });
};

await decompress();
