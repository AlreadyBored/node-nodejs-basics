import fs from "fs";

const write = async () => {
  // Write your code here
  const stream = fs.createWriteStream("src/streams/files/fileToWrite.txt");

  process.stdin.on("data", (chunk) => {
    stream.write(chunk);
  });

  // or ?
  // process.stdin.pipe(stream);
};

await write();
