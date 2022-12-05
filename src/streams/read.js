import path from "path";
import fs from "fs";
import process from "process";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  let chunkData = "";
  const filePath = path.resolve(__dirname, "./files", "fileToRead.txt");
  const readableStream = fs.createReadStream(filePath);

  readableStream.on("data", (chunk) => {
    chunkData += chunk;
  });
  readableStream.on("end", () => process.stdout.write(chunkData));
};

await read();
