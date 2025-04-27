import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToCompress.txt");
  const destinationPath = path.join(__dirname, "files", "archive.gz");

  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(destinationPath);
  const gzip = createGzip();

  readStream.pipe(gzip).pipe(writeStream);

  return new Promise((resolve, reject) => {
    writeStream.on("finish", resolve);
    writeStream.on("error", reject);
  });
};

await compress();