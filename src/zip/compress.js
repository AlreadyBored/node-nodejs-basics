import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream/promises";
import { fileURLToPath } from "url";
import path from "path";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const subPath = path.join(__dirname, "files");
  const gzip = zlib.createGzip();

  const readStream = fs.createReadStream(
    path.join(subPath, "fileToCompress.txt")
  );
  const writeStream = fs.createWriteStream(path.join(subPath, "archive.gz"));

  await pipeline(readStream, gzip, writeStream);
};

await compress();
