import fs from "node:fs/promises";
import path from "node:path";
import { FILES_DIR } from "./config.js";
import { exists } from "./exists.js";

const OLD_FILENAME = path.resolve(FILES_DIR, "wrongFilename.txt");
const NEW_FILENAME = path.resolve(FILES_DIR, "properFilename.md");

const rename = async () => {
  if (await exists(NEW_FILENAME)) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.rename(OLD_FILENAME, NEW_FILENAME);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
