import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let path = join(__dirname, "files", "fresh.txt");

  try {
    await fs.access(path);
    throw new Error("File already exists\nFS operation failed");
  } catch (err) {
    if (err.code == "ENOENT") {
      await fs.writeFile(path, `I am fresh and young`);
      console.log("File created");
    } else {
      console.error(err.message);
    }
  }
};

await create();
