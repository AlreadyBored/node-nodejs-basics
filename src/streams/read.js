import { stdout } from "node:process";
import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "url";

const DIR_NAME = "files";
const FILE_NAME = "fileToRead.txt";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const path = resolve(__filename, "../", DIR_NAME, FILE_NAME);
  const stream = createReadStream(path);

  stream.pipe(stdout);
};

await read();
