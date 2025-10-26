import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  try {
    await fs.writeFile(
      path.resolve(__dirname, "files/fresh.txt"),
      "I am fresh and young",
      { flag: "wx" }
    );
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
