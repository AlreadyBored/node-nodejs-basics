import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const subPath = path.join(__dirname, "files");

  const writableStream = fs.createWriteStream(
    path.join(subPath, "fileToWrite.txt")
  );

  process.stdin.pipe(writableStream);
};

write();
