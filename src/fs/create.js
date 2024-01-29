import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fresh.txt");
const fileContent = "I am fresh and young";

const create = async () => {
  try {
    await fs.access(filePath);
    throw new Error("FS operation failed: File already exists");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(filePath, fileContent);
    } else {
      throw new Error("FS operation failed: " + error.message);
    }
  }
};

await create();
