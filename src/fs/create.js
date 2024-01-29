import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const MESSAGE = "I am fresh and young";
const FILE_NAME = "fresh.txt";
const DIR = "files";

const create = async () => {
  const filePath = path.join(__dirname, DIR, FILE_NAME);

  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }

  fs.writeFileSync(filePath, MESSAGE);
};

await create();
