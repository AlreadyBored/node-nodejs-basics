import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream";
import { promisify } from "util";
import { createGunzip } from "zlib";
const __dirname = path.resolve();
const pipelineAsync = promisify(pipeline);

const decompress = async () => {
  try {
    const compressedFilePath = path.join(__dirname, "files", "archive.gz");
    const outputFilePath = path.join(__dirname, "files", "fileToCompress.txt");

    const readStream = createReadStream(compressedFilePath);
    const writeStream = createWriteStream(outputFilePath);

    const gunzip = createGunzip();

    await pipelineAsync(readStream, gunzip, writeStream);

    console.log("File decompressed successfully.");
  } catch (error) {
    console.error("Error during decompression:", error);
  }
};

await decompress();
