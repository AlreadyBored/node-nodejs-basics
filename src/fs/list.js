import { promises as fs } from "fs";
import path from "path";
const __dirname = path.resolve();

const list = async () => {
  // Write your code here
  const file = path.join(__dirname, "files");
  try {
    await fs.access(file);
  } catch (error) {
    throw new Error("FS operation failed");
  }

  try {
    const files = await fs.readdir(file);
    files.forEach((element) => {
      console.log(element);
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
