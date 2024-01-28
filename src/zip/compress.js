import { createGzip } from "zlib";
import { pipeline } from "stream";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  // Write your code here

  const pathToFile = path.join(__dirname, "files", "fileToCompress.txt");
  const pathToArchivedFile = path.join(__dirname, "files", "archive.gz");

  const gzip = createGzip();
  const sourceFile = fs.createReadStream(pathToFile);
  const destinationFile = fs.createWriteStream(pathToArchivedFile);

  pipeline(sourceFile, gzip, destinationFile, () => {
    console.log("Compression completed");
  });
};

await compress();
