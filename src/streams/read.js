import { createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "fileToRead.txt");
const read = async () => {
  const readStream = createReadStream(filePath, { encoding: "utf-8" });
  readStream.pipe(process.stdout);
};

await read();
