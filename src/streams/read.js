import { createReadStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  // Write your code here
  const file = join(__dirname, "files", "fileToRead.txt");
  const rStream = createReadStream(file);

  rStream.pipe(process.stdout);
};

read();
