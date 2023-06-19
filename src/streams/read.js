import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const read = async () => {
  await pipeline(
    createReadStream(path.resolve(__dirname, "files/fileToRead.txt")),
    process.stdout
  );
};

await read();
