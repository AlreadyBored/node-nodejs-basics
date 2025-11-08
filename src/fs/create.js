import { writeFile, access } from "fs/promises";
import { constants } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const dir = path.join(__dirname, "files");
  const filePath = path.join(dir, "fresh.txt");

  try {
    await access(filePath, constants.F_OK);
    throw new Error("FS operation failed");
  } catch {
    await writeFile(filePath, "I am fresh and young", { flag: "wx" });
  }
};

await create();
