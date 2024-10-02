import { promises as fs } from "fs";
import path from "path";
const __dirname = path.resolve();
const rename = async () => {
  // Write your code here
  const wrongFileName = path.join(__dirname, "files", "wrongFilename.txt");
  const rightFileName = path.join(__dirname, "files", "properFilename.md");
  try {
    await fs.access(wrongFileName);
  } catch (error) {
    throw new Error("FS operation failed");
  }
  try {
    await fs.access(rightFileName);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
  await fs.rename(wrongFileName, rightFileName);
  console.log("File renamed successfully!");
};

await rename();
