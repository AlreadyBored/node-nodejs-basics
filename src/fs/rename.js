import { existsSync } from "fs";
import { rename as asyncRename } from "fs/promises";

export const rename = async () => {
  if (
    !existsSync("./files/wrongFilename.txt") ||
    existsSync("./files/properFilename.md")
  ) {
    throw new Error("FS operation failed");
  } else {
    try {
      console.log("rename");
      await asyncRename(
        "./files/wrongFilename.txt",
        "./files/properFilename.md"
      );
    } catch (error) {
      throw new Error("FS operation failed");
    }
  }
};
rename();
