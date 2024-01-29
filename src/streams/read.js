import fs from "node:fs";
import process from "node:process";

const sourcePath = "src/streams/files/fileToRead.txt";

const read = async () => {
  const stream = fs.createReadStream(sourcePath);
  stream.on("data", (data) => {
    process.stdout.write(`${data}\n`);
  });
};

await read();
