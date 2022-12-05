import { readdir } from "fs/promises";
import * as path from "path";

const list = async () => {
  const folderName = "files";
  const fullPath = path.join(process.cwd(), "src", "fs", folderName);

  try {
    console.log(await readdir(fullPath));
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
