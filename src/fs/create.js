import { promises as fs } from "fs";
import path from "path";

const create = async () => {
  const __dirname = path.dirname("fresh.txt");
  const filePath = path.join(__dirname, "src/fs/files", "fresh.txt");
  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(filePath, "I am fresh and young");
    } else {
      throw err;
    }
  }
};

await create();
