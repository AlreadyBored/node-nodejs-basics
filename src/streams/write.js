import { createWriteStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const output = createWriteStream(src);
  process.stdin.on("data", (chunk) => {
    output.write(chunk);
  });
};

await write();
