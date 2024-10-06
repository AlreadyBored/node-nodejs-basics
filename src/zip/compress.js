import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";
import zlib from "zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCompress.txt");

const compress = async () => {
  await pipeline(
    fs.createReadStream(filePath),
    zlib.createGzip(),
    fs.createWriteStream(filePath + ".gz")
  );
};

await compress();
