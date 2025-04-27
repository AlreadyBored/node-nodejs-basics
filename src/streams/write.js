import path from "node:path";
import fs from "node:fs";

const write = async () => {
  const pathFile = path.join(import.meta.dirname, "files", "fileToWrite.txt");
  const writeStream = fs.createWriteStream(pathFile, { encoding: "utf-8" });

  process.stdin.on("error", (error) => {
    console.error("Failed to write file:", error);
  });

  process.stdin.pipe(writeStream);
};

await write();

