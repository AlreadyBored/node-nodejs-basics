import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const content = "I am fresh and young";
  const pathToWriteFile = path.join(__dirname, "..", "fs", "files", "fresh.txt");

  if (fs.existsSync(pathToWriteFile)) {
    throw new Error("FS operation failed");
  }

  fs.writeFile(pathToWriteFile, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("\nFile was Created\n");
    }
  });
};

await create();
