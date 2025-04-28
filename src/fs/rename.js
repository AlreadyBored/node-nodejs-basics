import { promises as fs } from "fs";

const rename = async () => {
  const oldPath = "src/fs/files/wrongFilename.txt";
  const newPath = "src/fs/files/properFilename.md";

  try {
    await fs.access(oldPath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw error;
  }

  try {
    await fs.access(newPath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  await fs.rename(oldPath, newPath);
};

await rename();
