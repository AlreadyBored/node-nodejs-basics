import { access, rename as fsRename } from "node:fs/promises";

const rename = async () => {
  const target = "./src/fs/files/properFilename.md";
  let isFileExists = false;

  try {
    await access(target);
    isFileExists = true;
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  if (isFileExists) {
    throw new Error("FS operation failed");
  }

  try {
    await fsRename("./src/fs/files/wrongFilename.txt", target);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
