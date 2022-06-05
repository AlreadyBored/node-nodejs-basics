import { stat, readdir } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathFiles = __dirname  + "/files/";

  try {
    await stat(pathFiles);
  } catch {
    throw new Error("FS operation failed");
  }

  const files = await readdir(pathFiles);
  files.forEach(async (file) => {
    console.log(file);
  });
};


await list()