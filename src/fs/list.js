import { readdir } from "node:fs/promises";
import { isFileExists } from "./utils.js";

const list = async () => {
  const src = "src/fs/files/";

  const exists = await isFileExists(src);

  if (!exists) {
    throw new Error("FS operation failed");
  }

  const files = await readdir(src);
  for (const file of files) console.log(file);
};

await list();
