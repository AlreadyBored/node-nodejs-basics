import { promises as fs } from "fs";
import { join } from "path";

const read = async () => {
  // Write your code here
  const filePath = join(".", "/files", "fileToRead.txt");
  try {
    await fs.access(filePath);
    const fileContent = await fs.readFile(filePath, "utf-8");
    console.log(fileContent);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed: file does not exist");
    } else {
      throw err;
    }
  }
};

await read();
