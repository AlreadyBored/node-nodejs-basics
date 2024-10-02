import { createWriteStream, promises as fs } from "fs";
import path from "path";
const __dirname = path.resolve();

const write = async () => {
  // Write your code here
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");
  const writableStream = createWriteStream(filePath);

  process.stdin.pipe(writableStream);

  writableStream.on("finish", () => {
    console.log("Data written to file successfully.");
  });

  writableStream.on("error", (err) => {
    console.error("FS operation failed", err);
  });

  process.stdin.on("end", () => {
    writableStream.end();
  });
};

await write();
