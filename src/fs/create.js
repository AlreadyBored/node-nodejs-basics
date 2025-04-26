import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ERROR_MESSAGE = "FS operation failed";

const create = async () => {
  const fileName = "fresh.txt";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = path.join(__dirname, "files", fileName);

  try {
    if (fs.existsSync(dirPath)) {
      throw new Error(ERROR_MESSAGE);
    }
    fs.writeFileSync(dirPath, "I am fresh and young");
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};

await create();
