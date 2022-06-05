import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = __dirname + "/files/fileToWrite.txt";
  const writer = fs.createWriteStream(filePath, "utf8");

  process.stdin.pipe(writer);
};

write()