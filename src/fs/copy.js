import fs from "fs/promises";
import path from "path";

const copy = async () => {
  const source = path.join(process.cwd(), "files");
  const dest = path.join(process.cwd(), "files_copy");

  const sourceExist = await fs
    .access(source)
    .then(() => true)
    .catch(() => false);
  if (!sourceExist) {
    throw new Error("FS operation failed"); // Source foolder doesnt exist
  }

  const destExist = await fs
    .access(dest)
    .then(() => true)
    .catch(() => false);
  if (destExist) {
    throw new Error("FS operation failed"); // destination folder already exists
  }

  await fs.mkdir(dest);

  const files = await fs.readdir(source);

  // copy all files from source to dest.
  for (const file of files) {
    const srcFile = path.join(source, file);
    const destFile = path.join(dest, file);
    await fs.copyFile(srcFile, destFile);
  }
};

await copy();
