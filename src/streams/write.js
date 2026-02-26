import path from "path";
import { fileURLToPath } from "node:url";
import { createWriteStream } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");
  const writable = createWriteStream(filePath);

  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (chunk) => {
    if (chunk.trim() === "") {
      writable.end();
      process.stdin.pause();
      return;
    }

    writable.write(chunk);
  });
};

await write();
