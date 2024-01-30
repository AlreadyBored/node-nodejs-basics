import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { createReadStream } from "node:fs";
import { pipeline } from "stream/promises";

const write = process.stdout;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  try {
    await pipeline(
      createReadStream(join(__dirname, "files", "fileToRead.txt")),
      write
    );
  } catch (error) {
    console.log(error);
  }
};

await read();
