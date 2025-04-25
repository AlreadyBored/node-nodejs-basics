import { rename as fsRename } from "node:fs/promises";

const rename = async () => {
  const oldPath = "./src/fs/files/wrongFilename.txt";
  const newPath = "./src/fs/files/properFilename.md";

  try {
    await fsRename(oldPath, newPath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
