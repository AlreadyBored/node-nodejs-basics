import fs from "fs";
import path from "path";
import zlib from "zlib";
import { pipeline } from "stream";
import { fileURLToPath } from "url";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const archivePath = path.join(__dirname, "files", "archive.gz");
  const outputPath = path.join(__dirname, "files", "fileToCompress.txt");

  const gunzip = zlib.createGunzip();
  const source = fs.createReadStream(archivePath);
  const destination = fs.createWriteStream(outputPath);

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error("FS operation failed:", err.message);
      process.exitCode = 1;
    } else {
      console.log("File successfully decompressed to fileToCompress.txt");
    }
  });
};

await decompress();
