import fs from "node:fs";

const write = async () => {
  const path = "files/fileToWrite.txt";
  const stream = fs.createWriteStream(path);
  stream.on("error", (error) => {
    throw error;
  });

  process.stdin.on("data", (data) => stream.write(data));
};

await write();

//write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
