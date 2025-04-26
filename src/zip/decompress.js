import fs from "fs/promises";
import { constants } from "fs";
import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";

const decompress = async () => {
  const filepath = path.resolve("files", "archive.gz");
  const fileDecompressFile = path.resolve("files", "fileToCompress.txt");
  try {
    await fs.access(filepath, constants.F_OK);

    const gzipProcess = createGunzip();
    const source = createReadStream(filepath);
    const destination = createWriteStream(fileDecompressFile);

    await pipeline(source, gzipProcess, destination);
  } catch (error) {
    console.log(error);
  }
};

await decompress();
