import fs from "fs/promises";

const rename = async () => {
  const fileToRenamePath = "src/fs/files/wrongFilename.txt";

  try {
    await fs.access(fileToRenamePath, fs.constants.F_OK);
    await fs.rename(fileToRenamePath, "src/fs/files/properFilename.md");
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
