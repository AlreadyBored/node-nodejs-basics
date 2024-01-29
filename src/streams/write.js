import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const output = fs.createWriteStream(
    join(__dirname, "files", "fileToWrite.txt")
  );
  process.stdin.pipe(output);
};

await write();
