import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");

  const writableStream = fs.createWriteStream(filePath, "utf-8");

  process.stdin.pipe(writableStream);

  writableStream.on("finish", () => {
    console.log("\n Data written successfully");
  });

  writableStream.on("error", (err) => {
    console.error("FS operation failed:", err.message);
  });
};

await write();
