import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const input = createReadStream(src);
  input.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
