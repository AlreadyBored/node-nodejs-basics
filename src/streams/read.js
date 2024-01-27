import fs from "fs";
import process from "process";

const read = async () => {
  const readable = fs.createReadStream("./src/streams/files/fileToRead.txt");

  readable.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
