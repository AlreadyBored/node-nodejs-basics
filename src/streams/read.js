import { createReadStream } from "node:fs";

const filePath = import.meta.dirname + "/files/fileToRead.txt";

const read = async () => {
  const readStream = createReadStream(filePath);
  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
  readStream.on("end", () => {
    console.log("\nFile was read successfully");
  });
};

await read();
