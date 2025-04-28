import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToCompress = join(__dirname, "files", "fileToCompress.txt");
const dist = join(__dirname, "files", "archive.gz");

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream(dist);
  const destination = createWriteStream(fileToCompress);

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error("Decompression failed:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();
