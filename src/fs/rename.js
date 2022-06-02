import { existsSync } from "fs";
import { rename as renameDir } from "fs/promises";

export const rename = async () => {
  // Write your code here
  const source = "files/wrongFilename.txt";
  const dest = "files/properFilename.md";
  if (!existsSync(source) || existsSync(dest))
    throw Error("FS operation failed");
  renameDir(source, dest);
};
