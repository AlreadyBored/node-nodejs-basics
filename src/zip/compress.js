import fs from "fs/promises";
import { constants } from "fs";
import path from "path";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const compress = async () => {
  const pathToFile = path.resolve("files", "fileToCompress.txt");
  const pathToArchive = path.resolve("files", "archive.gz");
  const gzip = createGzip();

  try {
    await fs.access(pathToFile, constants.F_OK);

    const source = createReadStream(pathToFile);
    const destination = createWriteStream(pathToArchive);

    await pipeline(source, gzip, destination);
  } catch (error) {
    console.error(error);
  }
};

await compress();
