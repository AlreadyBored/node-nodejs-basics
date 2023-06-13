import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";
import zlib from "zlib";

const decompress = async () => {
  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const srcPath = path.join(dir, "files", "archive.gz");
  const destPath = path.join(dir, "files", "fileToCompress.txt");
  const readStream = fs.createReadStream(srcPath);
  const writeStream = fs.createWriteStream(destPath);
  await pipeline(readStream, zlib.createGunzip(), writeStream);
};

await decompress();
