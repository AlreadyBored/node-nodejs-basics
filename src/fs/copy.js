import { access, constants, copyFile, readdir, mkdir } from "node:fs/promises";
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
const copy = async () => {
  const sourcePath = join(__dirname, "files");
  const destinationPath = join(__dirname, "files_copy");
  const isSourceExist = await checkIfFileExists(sourcePath);
  const isDestinationExist = await checkIfFileExists(destinationPath);

  if (!isSourceExist || isDestinationExist) {
    throw new Error("FS operation failed");
  }
  await mkdir(destinationPath);
  const files = await readdir(sourcePath);
  for (let file of files) {
    await copyFile(join(sourcePath, file), join(destinationPath, file));
  }
};

copy();
