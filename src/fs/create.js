import fs from "fs/promises";
import path from "path";
const create = async () => {
  const filePath = path.join("files", "fresh.txt");

  try {
    await fs.writeFile(filePath, "I am fresh and young", { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
