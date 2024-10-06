import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", "fileToWrite.txt");

  const writableStream = createWriteStream(filePath);

  writableStream.write("process.stdin");

  writableStream.on("finish", () => {});
};

await write();
