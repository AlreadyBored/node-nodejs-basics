import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FILE_NAME = "fileToWrite.txt";
const DIR = "files";

const write = async () => {
  const filePath = path.join(__dirname, DIR, FILE_NAME);
  const stream = fs.createWriteStream(filePath);

  process.stdin.pipe(stream);
};

await write();
