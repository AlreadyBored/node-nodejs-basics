import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files", "archive.gz");
  const destPath = path.join(__dirname, "files", "fileToCompress.txt");
  const inputStream = fs.createReadStream(sourcePath);
  const gunZipStream = zlib.createGunzip();
  const outputStream = fs.createWriteStream(destPath);

  await new Promise((resolve, reject) => {
    inputStream
      .pipe(gunZipStream)
      .pipe(outputStream)
      .on("finish", resolve)
      .on("error", reject);
  });

  console.log("completed!");
};

await decompress();
