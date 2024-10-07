import fs from "fs";

const read = async () => {
  // Write your code here
  const stream = fs.createReadStream("src/streams/files/fileToRead.txt");

  stream.on("data", (chunk) => {
    chunk = chunk.toString();
    process.stdout.write(chunk + "\n");
  });
};

await read();
