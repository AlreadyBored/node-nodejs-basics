import { promises as fs } from "fs";
import { getDirName, fileExists } from "../utils/utils.js";

const copy = async () => {
  const src = getDirName(import.meta.url) + "/files";
  const dest = getDirName(import.meta.url) + "/files_copy";

  const exists = await fileExists(dest);

  try {
    if (!exists) {
      await fs.mkdir(dest);
      await fs.cp(src, dest, { recursive: true });
      console.log("Successfully file copied.");
    } else {
      throw new Error("FS operation failed");
    }
  } catch (err) {
    console.log(err);
  }
};

await copy();
