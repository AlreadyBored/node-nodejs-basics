import { rename as fsRename } from "node:fs/promises"
import path from "path"

const rename = async () => {
  try {
    await fsRename(
      path.resolve("./files/wrongFilename.txt"),
      path.resolve("./files/properFilename.md"),
    )
  } catch {
    console.log("FS operation failed")
  }
};

await rename();
