import { createReadStream } from "node:fs";
const filePath = new URL("./files/fileToRead.txt", import.meta.url);

const read = async () => {
  // Write your code here
  const readStream = createReadStream(filePath);
  readStream.on("data", (chunk) => {
    process.stdout.write(`${chunk.toString()}\n`);
  });
  readStream.on("end", () => {});
};

await read();
