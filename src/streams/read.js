import fs from "node:fs";

const read = async () => {
  // Write your code here
  const path = "files/fileToRead.txt";
  const stream = fs.createReadStream(path);
  stream.on("error", (error) => {
    throw error;
  });
  stream.on("data", (chunk) => process.stdout.write(chunk.toString()));
  // process.stdout.write();
};

await read();

// read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
