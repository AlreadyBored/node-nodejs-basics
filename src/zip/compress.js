import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from 'zlib';


const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
  const destPath = path.join(__dirname, "files", "archive.gz");
  const inputStream = fs.createReadStream(sourcePath);
  const gzipStream = zlib.createGzip();
  const outputStream = fs.createWriteStream(destPath);

  await new Promise((resolve, reject) => {
    inputStream
      .pipe(gzipStream)
      .pipe(outputStream)
      .on("finish", resolve)
      .on("error", reject);
  });

  console.log("completed!");
};

await compress();
