import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { resolve } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "url";

const DIR_NAME = "files";
const FILE_NAME = "fileToCompress.txt";
const ZIP_NAME = "archive.gz";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const filePath = resolve(__filename, "../", DIR_NAME, FILE_NAME);
  const gzPath = resolve(__filename, "../", DIR_NAME, ZIP_NAME);

  pipeline(
    createReadStream(filePath),
    createGzip(),
    createWriteStream(gzPath),
    (err) => {
      if (err) {
        console.error("Pipeline failed.", err);
      } else {
        console.log("Pipeline succeeded.");
      }
    }
  );
};

await compress();
