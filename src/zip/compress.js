import { createGzip } from "node:zlib";
import { createWriteStream, createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const compress = async () => {
  try {
    const gzip = createGzip();
    const rs = createReadStream(join(__dirname, "files/fileToCompress.txt"));
    const ws = createWriteStream(join(__dirname, "files/archive.gz"));
    await pipeline(rs, gzip, ws);
  } catch (error) {
    console.log(error);
  }
};

await compress();
