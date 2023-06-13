import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const data = "I am fresh and young";
  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const filePath = path.join(dir, "files", "fresh.txt");
  let fileExists = false;
  try {
    fileExists = await fs.access(filePath);
  } catch (err) {}
  if (fileExists === undefined) {
    throw new Error("FS operation failed");
  }
  await fs.writeFile(filePath, data);
};

await create();
