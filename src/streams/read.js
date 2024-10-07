import fs from "node:fs";
import path from "node:path";

const read = async () => {
  const filePath = path.join(import.meta.dirname + "/files/fileToRead.txt");
  const readStream = fs.createReadStream(filePath);
  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
