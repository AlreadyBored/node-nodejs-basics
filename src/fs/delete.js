import { promises as fs } from "fs";
import path from "path";
const __dirname = path.resolve();

const remove = async () => {
  // Write your code here
  const delateFile = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.access(delateFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }

  await fs.unlink(delateFile);
  console.log("file delated successfuly");
};

await remove();
