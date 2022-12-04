import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToCompress.txt");
const pathToArchive = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToArchive);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error(err);
    }
    process.exitCode = 1;
  });
};

await compress();
