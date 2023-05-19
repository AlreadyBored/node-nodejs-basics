import { mkdir, access, copyFile, readdir } from "node:fs/promises";
const projectFolder = new URL("./files_copy/", import.meta.url);
const projectFolder1 = new URL("./files/", import.meta.url);

const copy = async () => {
  // Write your code here
  try {
    await access(projectFolder1);
    await mkdir(projectFolder, { recursive: false });
    const files = await readdir(projectFolder1, { withFileTypes: true });
    for (const file of files) {
      await copyFile(
        new URL(file.name, projectFolder1),
        new URL(file.name, projectFolder)
      );
    }
  } catch (err) {
    throw Error(`\u001B[31mFS operation failed\u001B[0m ${err.message}`);
  }
};

await copy();
