import { access, rename as fsRename } from "node:fs/promises";

const __dirname = import.meta.dirname;

const rename = async () => {
  const target = __dirname + "/files/properFilename.md";
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
    await fsRename(__dirname + "/files/wrongFilename.txt", target);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
