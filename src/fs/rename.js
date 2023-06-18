import { rename as renameFs, access, constants } from "fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const folderPath = join(__dirname, "files");
  const wrongFilePath = join(folderPath, "wrongFilename.txt");
  const properFilePath = join(folderPath, "properFilename.md");

  const properFileIsExist = await access(properFilePath, constants.F_OK)
    .then(() => true)
    .catch(() => false);
  if (properFileIsExist) throw "FS operation failed";

  try {
    await renameFs(wrongFilePath, properFilePath);
  } catch {
    throw "FS operation failed";
  }
};

await rename();
