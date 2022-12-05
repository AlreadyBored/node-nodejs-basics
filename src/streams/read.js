import { createReadStream } from "node:fs";
import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  // Write your code here
  const readStr = createReadStream(__dirname + "/files/fileToRead.txt", "utf8");
  readStr.pipe(process.stdout);
};

await read();
