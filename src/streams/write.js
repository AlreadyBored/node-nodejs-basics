import fs from "node:fs";
import path from "node:path";

const write = async () => {
  const fileName = "fileToWrite.txt";
  const fullPath = path.join(
    process.cwd(),
    "src",
    "streams",
    "files",
    fileName
  );

  const writeStream = fs.createWriteStream(fullPath);
  process.stdin.pipe(writeStream);
};

await write();
