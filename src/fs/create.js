import { promises as fs } from "fs";
import path from "path";
const __dirname = path.resolve();
const create = async () => {
  // Write your code here
  const filePath = path.join(__dirname, "files", "fresh.txt");
  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error) {
      await fs.mkdir(path.join(__dirname, "files"), { recursive: true });
      await fs.writeFile(filePath, "I am fresh and young");
      console.log("File created successfully!");
    } else {
      throw error;
    }
  }
};

await create();
