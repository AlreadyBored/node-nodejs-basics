import { createWriteStream } from "node:fs";
import path from "node:path";
import url from "node:url";
import { pipeline } from "node:stream/promises";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const write = async () => {
  await pipeline(
    process.stdin,
    createWriteStream(path.resolve(__dirname, "files/fileToWrite.txt"))
  );
};

await write();
