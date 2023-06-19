import { writeFile } from "fs/promises";
import { getPath } from "../utils/getPath.js";

export const create = async () => {
  const src = getPath(import.meta.url, "fresh.txt");
  const content = "I am fresh and young";
  const errorMessage = "FS operation failed";

  try {
    await writeFile(src, content, { flag: "wx" });
  } catch (err) {
    throw new Error(errorMessage);
  }

};
create();
