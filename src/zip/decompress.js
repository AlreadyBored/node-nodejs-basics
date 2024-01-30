import { pipeline } from "stream/promises";
import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const input = join(__dirname, "files", "archive.gz");
const output = join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  try {
    const unzip = createUnzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipeline(source, unzip, destination);
  } catch (error) {
    console.log(error);
  }
};

await decompress();
