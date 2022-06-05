import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
  // Write your code here
  const unzip = createUnzip();
  const source = createReadStream(join(__dirname, "files", "archive.gz"));
  const destination = createWriteStream(
    join(__dirname, "files", "fileToCompress.txt")
  );

  await pipeline(source, unzip, destination);
};

await decompress();
