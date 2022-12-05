import { stdin } from "node:process";
import { resolve } from "node:path";
import { createWriteStream } from "node:fs";
import { fileURLToPath } from "url";

const DIR_NAME = "files";
const FILE_NAME = "fileToWrite.txt";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const path = resolve(__filename, "../", DIR_NAME, FILE_NAME);
  const stream = createWriteStream(path);

  stdin.pipe(stream);
};

await write();
