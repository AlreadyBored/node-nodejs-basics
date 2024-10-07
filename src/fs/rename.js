import { promises as fs } from "fs";
import path from "path";

const rename = async () => {
  const filePath = path.join("src", "fs", "files", "wrongFilename.txt");
  const newfilePath = path.join("src", "fs", "files", "properFilename.md");

  try {
    await fs.access(filePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
  try {
    await fs.access(newfilePath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
  await fs.rename(filePath, newfilePath);
  console.log("File renamed successfully!");
};

await rename();
