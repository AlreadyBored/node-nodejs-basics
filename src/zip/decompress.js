import fs from "node:fs";
import zlib from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "node:url";
const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const sourcePath = path.join(__dirname, "files", "archive.gz");
  const destinationPath = path.join(__dirname, "files", "fileToCompress.txt");

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destinationPath);
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`Файл успешно распакован`);
  });

  readStream.on("error", () => {
    console.error("FS operation failed");
  });

  writeStream.on("error", () => {
    console.error("FS operation failed");
  });

  gunzip.on("error", () => {
    console.error("Zlib decompression error");
  });
};

await decompress();
