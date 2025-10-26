import { readdir, access } from "node:fs/promises";
import { join } from "node:path";

const list = async () => {
  const dirPath = join(process.cwd(), "src", "fs", "files");

  try {
    await access(dirPath);
    const files = await readdir(dirPath);
    console.log(files);
  } catch (error) {
    if (error.code === "ENOENT") {
      // Directory doesn't exist, error
      throw new Error("FS operation failed");
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await list();
