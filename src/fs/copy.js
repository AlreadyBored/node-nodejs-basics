import * as fsPromise from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import checkFileExistsAsync from "../utils/checkFileExistAsync.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, "files");
const targetPath = path.join(__dirname, "files_copy");

const copy = async () => {
  if (
    !(await checkFileExistsAsync(folderPath)) ||
    (await checkFileExistsAsync(targetPath))
  ) {
    throw new Error("FS operation failed");
  }

  try {
    await fsPromise.mkdir(targetPath);
    const files = await fsPromise.readdir(folderPath);
    files.forEach((file) =>
      fsPromise.copyFile(path.join(folderPath, file), path.join(targetPath, file))
    );
  } catch (err) {
    console.error(err.message);
  }
};

copy();

/*
const copy = async () => {
  if (!fs.existsSync(folderPath) || fs.existsSync(targetPath)) {
    throw new Error("FS operation failed");
  }
  try {
    fs.mkdirSync(targetPath);
    fs.readdir(folderPath, (err, files) => {
      if (err) throw err;
      return files.forEach((file) =>
        fs.copyFileSync(
          path.join(folderPath, file),
          path.join(targetPath, file)
        )
      );
    });
  } catch (err) {
    console.error(err.message);
  }
};

copy();
*/
