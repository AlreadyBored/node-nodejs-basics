import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const input = fs.createReadStream(join(__dirname, "files", "fileToRead.txt"));
  input.pipe(process.stdout);
};

await read();
