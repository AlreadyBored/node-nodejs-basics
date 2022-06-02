import { rm } from "fs/promises";
import { existsSync } from "fs";

export const remove = async () => {
  // Write your code here
  const dest = "files/fileToRemove.txt";
  if (!existsSync(dest)) throw Error("FS operation failed");
  await rm(dest);
};
