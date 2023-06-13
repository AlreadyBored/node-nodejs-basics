import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";
import zlib from "zlib";

const compress = async () => {
  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const srcPath = path.join(dir, "files", "fileToCompress.txt");
  const destPath = path.join(dir, "files", "archive.gz");
  const readStream = fs.createReadStream(srcPath);
  const writeStream = fs.createWriteStream(destPath);
  await pipeline(readStream, zlib.createGzip(), writeStream);
};

await compress();
