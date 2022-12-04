import { writeFile } from "fs/promises";
import { getPath } from "./getPath.js";

export const create = async () => {
  const src = getPath(import.meta.url, "fresh.txt");
  console.log(src);
  const content = "I am fresh and young";
  const errorMessage = "FS operation failed";
  try {
    await writeFile(src, content, { flag: "wx" });
  } catch (err) {
    throw new Error(errorMessage);
  }
};
create();
