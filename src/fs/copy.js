import { mkdir, readdir, copyFile } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

export const copy = async () => {
  // Write your code here
  if (!existsSync("files") || existsSync("files_copy"))
    throw Error("FS operation failed");
  await mkdir("files_copy", { recursive: true });
  let entries = await readdir("files", { withFileTypes: true });
  for (let entry of entries) {
    let srcPath = join("files", entry.name);
    let destPath = join("files_copy", entry.name);
    entry.isDirectory()
      ? await copyDir(srcPath, destPath)
      : await copyFile(srcPath, destPath);
  }
};
