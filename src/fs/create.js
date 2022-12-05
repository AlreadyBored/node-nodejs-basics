import * as fs from "fs/promises";
import * as path from "path";

import { exists } from "./supports/exists.js";

const create = async () => {
  const fileContent = "I am fresh and young";
  const fileName = "fresh.txt";
  const fullPath = path.join(process.cwd(), "src", "fs", "files", fileName);

  try {
    const isExists = await exists(fullPath);
    if (!isExists) fs.writeFile(fullPath, fileContent);
    else throw "error";
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
