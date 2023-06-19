import { cp } from "node:fs/promises";
import { FILES_DIR } from "./config.js";

const COPY_SUFFIX = "_copy";

const copy = async () => {
  try {
    await cp(FILES_DIR, FILES_DIR + COPY_SUFFIX, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
