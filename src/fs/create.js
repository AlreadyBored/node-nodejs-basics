import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files/fresh.txt");
  const content = "I am fresh and young";

  try {
    await writeFile(filePath, content, { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

create();
