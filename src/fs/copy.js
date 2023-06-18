import { mkdir, copyFile, readdir, access, constants } from "fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function deepCopyFolder(srcPath, destPath) {
  await mkdir(destPath, { recursive: true });
  let files = await readdir(srcPath, { withFileTypes: true });
  for (let file of files) {
    if (file.isFile()) {
      await copyFile(join(srcPath, file.name), join(destPath, file.name));
    } else {
      await deepCopyFolder(join(srcPath, file.name), join(destPath, file.name));
    }
  }
}

const copy = async () => {
  const srcFolderPath = join(__dirname, "files");
  const destFolderPath = join(__dirname, "files-copy");
  try {
    await access(srcFolderPath, constants.F_OK);
    const destFolderIsExist = await access(destFolderPath, constants.F_OK)
      .then(() => true)
      .catch(() => false);
    if (destFolderIsExist) throw "FS operation failed";
    deepCopyFolder(srcFolderPath, destFolderPath);
  } catch {
    throw "FS operation failed";
  }
};

await copy();
