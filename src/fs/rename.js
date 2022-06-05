import { stat, rename as renameFs } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathFileWrongName = __dirname  + "/files/wrongFilename.txt";
  const pathFileGoodName = __dirname  + "/files/properFilename.md";

  try {
    await stat(pathFileWrongName);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    const stat = await stat(pathFileGoodName);

    if (stat) {
      throw new Error("FS operation failed");
    }
  } catch {}

  await renameFs(pathFileWrongName, pathFileGoodName);
};

rename()