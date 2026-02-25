import path from "path";
import { fileURLToPath } from "node:url";
import { createReadStream } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  const readable = createReadStream(filePath);

  for await (const chunk of readable) {
    process.stdout.write(chunk);
  }
};

await read();
