import * as fs from "fs/promises";
import * as path from "path";

import { exists } from "./supports/exists.js";

const remove = async () => {
  const fileName = "fileToRemove.txt";
  const fullPath = path.join(process.cwd(), "src", "fs", "files", fileName);
  const isExists = await exists(fullPath);

  try {
    if (!isExists) throw "error";
    fs.rm(fullPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
