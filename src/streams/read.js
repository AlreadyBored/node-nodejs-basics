import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readableStream = fs.createReadStream(filePath);
  await pipeline(readableStream, process.stdout);
};

await read();
