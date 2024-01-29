import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const subPath = path.join(__dirname, "files");

  const readableStream = fs.createReadStream(
    path.join(subPath, "fileToRead.txt"),
    { encoding: "utf-8" }
  );

  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

read();
