import { createReadStream, createWriteStream } from "node:fs";
import zlib from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "url";
import { pipeline } from "node:stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const unzip = zlib.createUnzip();
  const sourceFile = createReadStream(path.join(__dirname, "files/archive.gz"));
  const resultFile = createWriteStream(
    path.join(__dirname, "files/fileToCompress.txt")
  );

  await pipeline(sourceFile, unzip, resultFile);
};

await decompress();
