import { createReadStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const read = async () => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, "./files/fileToRead.txt");

    const stream = createReadStream(filePath);
    await pipeline(stream, process.stdout);
    console.log("File content has been successfully written to stdout.");
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
};

await read();
