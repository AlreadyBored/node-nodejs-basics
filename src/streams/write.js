import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");

  const stream = createWriteStream(filePath);
  process.stdin.pipe(stream);

  stream.on("error", () => {
    console.error("FS operation failed");
  });
};

await write();
