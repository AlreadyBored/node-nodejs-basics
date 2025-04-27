import { createWriteStream } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filePath = join(__dirname, "files", "fileToWrite.txt");

  const writeStream = createWriteStream(filePath);

  try {
    await pipeline(process.stdin, writeStream);
  } catch (error) {
    console.error("Pipeline failed.", error);
  }
};

await write();