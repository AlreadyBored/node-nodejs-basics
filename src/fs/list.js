import { promises as fs } from "fs";
import { join } from "path";

const list = async () => {
  // Write your code here
  const folderPath = join(".", "files");
  try {
    await fs.access(folderPath);

    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed: folder does not exist");
    } else {
      throw err;
    }
  }
};

await list();
