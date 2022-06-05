import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
  // Write your code hereclear

  const filePath = path.resolve(__dirname, "files", "fileToWrite.txt");
  const stream = fs.createWriteStream(filePath, { encoding: "utf-8" });

  process.stdin.pipe(stream);
};

write();
