// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream

import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");
  const writableStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writableStream);

  return new Promise((resolve, reject) => {
    writableStream.on("finish", resolve);
    writableStream.on("error", reject);
    process.stdin.on("end", () => writableStream.end());
  });
};

await write();
