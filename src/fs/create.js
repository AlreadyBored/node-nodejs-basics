import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const create = async () => {
  const content = "I am fresh and young";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", "fresh.txt");

  try {
    await writeFile(filePath, content, { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
