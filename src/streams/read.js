import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("error", (err) => {
    console.error("FS operation failed", err.message);
  });
};

await read();
