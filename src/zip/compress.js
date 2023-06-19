import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const folderPath = join(__dirname, "files");

  const gzip = createGzip();
  const source = createReadStream(join(folderPath, "fileToCompress.txt"));
  const destination = createWriteStream(join(folderPath, "archive.gz"));

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
