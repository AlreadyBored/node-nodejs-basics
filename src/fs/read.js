import { existsSync } from "fs";
import { readFile } from "fs/promises";

export const read = async () => {
  // Write your code here
  const fileName = "files/fileToRead.txt";
  if (!existsSync(fileName)) throw new Error("FS operation failed");
  const file = await readFile(fileName, "utf8");
  console.log(file);
};
