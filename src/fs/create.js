import { writeFile } from "node:fs/promises";
import { join } from "node:path";

const dirname = import.meta.dirname;
const filePath = join(dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await writeFile(filePath, "I am fresh and young", {
      encoding: "utf-8",
      flag: "wx",
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
