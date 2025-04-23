import fs from "node:fs/promises";
import path from "node:path";

const __dirname = import.meta.dirname;

const create = async () => {
  const newFilePath = path.join(__dirname, "files", "fresh.txt");

  try {
    await fs.writeFile(newFilePath, "I am fresh and young", { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();

