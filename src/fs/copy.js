import fs from "fs/promises";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathJoin = (...paths) => {
  return path.join(__dirname, ...paths);
};

const folderIsExists = async (dirName) => {
  try {
    await fs.access(pathJoin(dirName));
    return true;
  } catch (err) {
    return false;
  }
};

const copy = async (srcDirName, destDirName) => {
  try {
    const foldersExists =
      !(await folderIsExists(srcDirName)) ||
      (await folderIsExists(destDirName));

    if (foldersExists) throw "FS operation failed";

    await fs.mkdir(pathJoin(destDirName));

    const entries = await fs.readdir(pathJoin(srcDirName), {
      withFileTypes: true,
    });

    for (const entry of entries) {
      await fs.copyFile(
        pathJoin(srcDirName, entry.name),
        pathJoin(destDirName, entry.name)
      );
    }
  } catch (err) {
    throw new Error(err);
  }
};

await copy("files", "files_copy2");