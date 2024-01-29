import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const list = async () => {
  const folderPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files"
  );

  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath);
    for (const file of files) console.log(file);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed: folder files doesn't exists");
    }
    throw error;
  }
};

await list();
