import { cp } from "node:fs/promises";
import { isFileExists } from "./utils.js";

const copy = async () => {
  const src = "src/fs/files";
  const dst = src + "_copy";
  const options = { recursive: true };

  const isSrcExists = await isFileExists(src);
  const isDstExists = await isFileExists(dst);

  if (!isSrcExists || isDstExists) {
    throw new Error("FS operation failed");
  }
  await cp(src, dst, options);
};

await copy();
