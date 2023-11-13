import path from "path";
import fs from "fs/promises";

const create = async () => {
  const currentDir = path.resolve("src", "fs");
  const filePath = path.join(currentDir, "files", "fresh.txt");
  const fileContent = "I am fresh and young";

  try {
    await fs.access(filePath);
    throw new Error("FS operation failed: File already exists");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.writeFile(filePath, fileContent);
      } catch (writeError) {
        throw writeError;
      }
    } else {
      throw error;
    }
  }
};

await create();
