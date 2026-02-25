import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const create = async () => {
  const filePath = path.join(dirname, "files", "fresh.txt");
  try {
    await writeFile(filePath, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
