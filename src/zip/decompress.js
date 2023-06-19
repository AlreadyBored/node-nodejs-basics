import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const folderPath = join(__dirname, "files");

  const gunzip = createGunzip();
  const source = createReadStream(join(folderPath, "archive.gz"));
  const destination = createWriteStream(join(folderPath, "fileToCompress.txt"));

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();
