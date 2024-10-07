import { createReadStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathToFile = path.join(__dirname, "files", "fileToRead.txt");
  const stream = createReadStream(pathToFile, "utf-8");
  stream.pipe(process.stdout);
  stream.on("error", (err) => {
    throw new Error("FS operation failed", err);
  });
};

await read();
