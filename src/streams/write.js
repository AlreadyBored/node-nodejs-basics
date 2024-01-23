import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");
  const writableStream = fs.createWriteStream(filePath);
  process.stdin.pipe(writableStream);
};

await write();
