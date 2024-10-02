import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream";
import { promisify } from "util";
import { createGzip } from "zlib";
const __dirname = path.resolve();
const pipelineAsync = promisify(pipeline);

const compress = async () => {
  try {
    const filePath = path.join(__dirname, "files", "fileToCompress.txt");
    const compressedFilePath = path.join(__dirname, "files", "archive.gz");

    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(compressedFilePath);

    const gzip = createGzip();

    await pipelineAsync(readStream, gzip, writeStream);

    console.log("File compressed successfully.");
  } catch (error) {
    console.error("Error during compression:", error);
  }
};

await compress();
