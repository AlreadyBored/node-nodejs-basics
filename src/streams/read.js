import { createReadStream } from "fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const folderPath = join(__dirname, "files");
  const filePath = join(folderPath, "fileToRead.txt");
  createReadStream(filePath).pipe(process.stdout);
};

await read();
