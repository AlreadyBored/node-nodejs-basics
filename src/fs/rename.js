import { access, constants, rename as fsRename } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const checkIfFileExists = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
  const oldPath = join(__dirname, "files/wrongFilename.txt");
  const newPath = join(__dirname, "files/properFilename.md");
  const isOldExist = await checkIfFileExists(oldPath);
  const isNewExist = await checkIfFileExists(newPath);
  if (!isOldExist || isNewExist) throw new Error("FS operation failed");
  await fsRename(oldPath, newPath);
};

await rename();
