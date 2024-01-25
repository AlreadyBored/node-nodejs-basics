import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

  const readStream = fs.createReadStream(pathToFile);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
