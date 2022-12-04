import fs from "node:fs";
import path from "node:path";

// write.js - implement function that writes process.stdin data into file fileToWrite.txt
// content using Writable Stream

const write = async () => {
  // Write your code here

  const writableStream = fs.createWriteStream(
    path.resolve(process.cwd(), "src", "streams", "files", "fileToWrite.txt")
  );

  writableStream.on("error", () => {
    throw new Error("FS operation failed");
  });

  process.stdin.pipe(writableStream);
};

await write();
