import fs from "fs";
import zlib from "zlib";
import url from "url";
import path from "path";
import { pipeline } from "stream/promises";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  try {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream(
      path.join(__dirname, "files", "fileToCompress.txt")
    );
    const output = fs.createWriteStream(
      path.join(__dirname, "files", "archive.gz")
    );

    pipeline(input, gzip, output)
      .then(() => console.log("Compress done!"))
      .catch(() => console.log("Compress error"));
  } catch (err) {
    console.log(err);
  }
};

await compress();