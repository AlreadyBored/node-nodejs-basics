import { createWriteStream } from "node:fs";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  // Write your code here
  const writeStr = createWriteStream(
    __dirname + "/files/fileToWrite.txt",
    "utf8"
  );
  process.stdin.pipe(writeStr);
  console.log(" Write to stdin...\n >");
};

await write();
