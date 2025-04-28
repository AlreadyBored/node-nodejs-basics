import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRead = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  await pipeline(createReadStream(fileToRead), process.stdout);
};

await read();
