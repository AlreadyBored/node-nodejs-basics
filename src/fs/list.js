import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ERROR_MESSAGE = "FS operation failed";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = path.join(__dirname, "files");

  if (!fs.existsSync(dirPath)) {
    throw new Error(ERROR_MESSAGE);
  }

  try {
    const files = await fs.promises.readdir(dirPath);
    for (const file of files) console.log(file);
  } catch (err) {
    console.error(err);
  }
};

await list();
