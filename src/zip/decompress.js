import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";
import path from "path";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const subPath = path.join(__dirname, "files");
  const gunzip = zlib.createGunzip();

  const readStream = fs.createReadStream(path.join(subPath, "archive.gz"));
  const writeStream = fs.createWriteStream(
    path.join(subPath, "fileToCompress.txt")
  );

  await pipeline(readStream, gunzip, writeStream);
};

await decompress();
