import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
const destinationPath = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("Error during GZip process: ", err);
    }
  });
};

await compress();
