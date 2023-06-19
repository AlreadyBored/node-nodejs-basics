import fs from "node:fs/promises";
import path from "node:path";
import { FILES_DIR } from "./config.js";

const remove = async () => {
  try {
    await fs.unlink(path.resolve(FILES_DIR, "fileToRemove.txt"));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
