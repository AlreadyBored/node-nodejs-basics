import { writeFile } from "fs/promises";
import { existsSync } from "fs";

export const create = async () => {
  // Write your code here
  const dest = "files/fresh.txt";
  if (existsSync(dest)) throw Error("FS operation failed");
  await writeFile(dest, "I am fresh and young", { flag: "wx" });
};
