import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";
import zlib from "zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCompress.txt.gz");

const compress = async () => {
  await pipeline(
    fs.createReadStream(filePath),
    zlib.createGunzip(),
    fs.createWriteStream(filePath.replace(".gz", ""))
  );
};

await compress();
