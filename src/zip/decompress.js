import { createGunzip } from "zlib";
import { pipeline } from "stream";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  // Write your code here

  const pathToArchivedFile = path.join(__dirname, "files", "fileToCompress.txt");
  const pathToFile = path.join(__dirname, "files", "archive.gz");

  const gunZip = createGunzip();
  const sourceFile = fs.createReadStream(pathToFile);
  const destinationFile = fs.createWriteStream(pathToArchivedFile);

  pipeline(sourceFile, gunZip, destinationFile, () => {
    console.log("Decompression completed");
  });
};

await decompress();
