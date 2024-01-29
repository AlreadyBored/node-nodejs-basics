import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FILE_NAME = "fileToRead.txt";
const DIR = "files";

const read = async () => {
  const filePath = path.join(__dirname, DIR, FILE_NAME);
  const readStream = fs.createReadStream(filePath);

  readStream.pipe(process.stdout);
};

await read();
