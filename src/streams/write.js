import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToWrite = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  await pipeline(process.stdin, createWriteStream(fileToWrite));
};

await write();
