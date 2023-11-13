import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { createGzip } from "zlib";

const compress = async () => {
  const inputFileName = "fileToCompress.txt";
  const outputFileName = "archive.gz";

  const currentDir = path.resolve("src", "zip", "files");
  const inputFilePath = path.join(currentDir, inputFileName);
  const outputFilePath = path.join(currentDir, outputFileName);

  const inputStream = createReadStream(inputFilePath);
  const outputStream = createWriteStream(outputFilePath);
  const gzipStream = createGzip();

  inputStream.pipe(gzipStream).pipe(outputStream);

  return new Promise((res, rej) => {
    outputStream.on("error", (err) => {
      rej(err);
    });

    outputStream.on("finish", () => {
      console.log(
        `File compressed successfully. Result saved to ${outputFilePath}`
      );
      res();
    });
  });
};

await compress();
