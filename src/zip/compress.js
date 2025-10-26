import fs from "node:fs";
import zlib from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "node:url";
const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
  const destinationPath = path.join(__dirname, "files", "archive.gz");

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destinationPath);
  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`Файл успешно сжат`);
  });

  readStream.on("error", () => {
    console.error("FS operation failed");
  });

  writeStream.on("error", () => {
    console.error("FS operation failed");
  });

  gzip.on("error", () => {
    console.error("Zlib compression error");
  });
};

await compress();
