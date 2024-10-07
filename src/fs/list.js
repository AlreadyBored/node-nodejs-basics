import { promises as fs } from "fs";
import path from "path";

const list = async () => {
  const folderPath = path.join("src", "fs", "files");

  try {
    await fs.access(folderPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
  const filenames = await fs.readdir(folderPath);
  console.log(filenames);
};

await list();
