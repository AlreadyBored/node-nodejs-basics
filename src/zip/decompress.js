import { createUnzip } from "node:zlib";
import { createWriteStream, createReadStream } from "node:fs";
import { pipeline } from "node:stream";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourcePath = path.join(__dirname, "files", "archive.gz");
const destinationPath = path.join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);
  pipeline(source, unzip, destination, (err) => {
    if (err) {
      throw err;
    }
  });
};

await decompress();
