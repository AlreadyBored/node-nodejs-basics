import fs from "fs/promises";
import path from "path";

const create = async () => {
  try {
    const dir = path.join(process.cwd(), "files");
    const filePath = path.join(dir, "fresh.txt");

    try {
      await fs.access(filePath);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code === "ENOENT") {
        await fs.writeFile(filePath, "I am fresh and young");
      } else {
        throw error;
      }
    }
  } catch (error) {
    throw error;
  }
};

await create();
