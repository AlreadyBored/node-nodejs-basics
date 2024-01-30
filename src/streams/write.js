import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { createWriteStream } from "node:fs";
import { pipeline } from "stream/promises";

const read = process.stdin;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  try {
    await pipeline(
      read,
      createWriteStream(join(__dirname, "files", "fileToWrite.txt"))
    );
  } catch (error) {
    console.log(error);
  }
};

await write();
