import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writableStream = fs.createWriteStream(filePath);
  await pipeline(process.stdin.setEncoding("utf8"), writableStream);
};

await write();
