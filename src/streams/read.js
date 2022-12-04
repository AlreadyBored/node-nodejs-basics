import fs from "node:fs";
import path from "node:path";

// read.js - implement function that reads file fileToRead.txt
// content using Readable Stream and prints it's content into process.stdout

const read = async () => {
  // Write your code here

  const streamFromFile = fs.createReadStream(
    path.resolve(process.cwd(), "src", "streams", "files", "fileToRead.txt")
  );

  streamFromFile.on("error", (error) => {
    throw new Error("FS operation failed");
  });

  streamFromFile.pipe(process.stdout);
};

await read();
