import { rename as fsRename } from "node:fs/promises";
import { isFileExists } from "./utils.js";

const rename = async () => {
  const path = "src/fs/files/";
  const src = path + "wrongFilename.txt";
  const dst = path + "properFilename.md";

  const isSrcExists = await isFileExists(src);
  const isDstExists = await isFileExists(dst);

  if (!isSrcExists || isDstExists) {
    throw new Error("FS operation failed");
  }

  await fsRename(src, dst);
};

await rename();
