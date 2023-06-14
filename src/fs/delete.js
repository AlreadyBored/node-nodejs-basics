import { rm } from "node:fs/promises";
import { isFileExists } from "./utils.js";

const remove = async () => {
  const src = "src/fs/files/fileToRemove.txt";

  const exists = await isFileExists(src);

  if (!exists) {
    throw new Error("FS operation failed");
  }

  await rm(src);
};

await remove();
