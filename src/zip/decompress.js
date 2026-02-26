import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip, createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourcePath = path.join(__dirname, "files", "archive.gz");
const destinationPath = path.join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error("Error occured during unzip: ", err);
    }
  });
};

await decompress();
