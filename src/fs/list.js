import { readdir } from "fs/promises";
import { existsSync } from "fs";

export const list = async () => {
  // Write your code here
  const dest = "files";
  if (!existsSync(dest)) throw new Error("FS operation failed");
  const files = await readdir(dest);
  console.log(files);
};
