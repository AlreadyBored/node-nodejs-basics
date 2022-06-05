import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  const destPath = path.join(__dirname, "files", "fresh.txt");
  const data = "I am fresh and young";
  try {
    await fs.writeFile(destPath, data, {
      flag: "wx",
    });
  } catch (error) {
    if (error.code === "EEXIST") {
      throw Error("FS operation failed");
    }
    throw Error(error);
  }
};

await create();
