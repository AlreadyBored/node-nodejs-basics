import fs from "fs";
import zlib from "zlib";
import url from "url";
import path from "path";
import { pipeline } from "stream/promises";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  try {
    const unzip = zlib.createUnzip();
    const input = fs.createReadStream(
      path.join(__dirname, "files", "archive.gz")
    );
    const output = fs.createWriteStream(
      path.join(__dirname, "files", "fileToCompress.txt")
    );

    pipeline(input, unzip, output)
      .then(() => console.log("Decompress done!"))
      .catch(() => console.log("Decompress error"));
  } catch (err) {
    console.log(err);
  }
};

await decompress();