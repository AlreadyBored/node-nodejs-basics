import fs from "fs";
import path from "path";
import zlib from "zlib";
import { pipeline } from "stream";
import { fileURLToPath } from "url";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
  const destPath = path.join(__dirname, "files", "archive.gz");

  const gzip = zlib.createGzip();
  const source = fs.createReadStream(sourcePath);
  const destination = fs.createWriteStream(destPath);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("FS operation failed:", err.message);
      process.exitCode = 1;
    } else {
      console.log("File successfully compressed to archive.gz");
    }
  });
};

await compress();
