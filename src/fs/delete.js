import fs from "fs/promises";

const remove = async () => {
  const fileToRemovePath = "src/fs/files/fileToRemove.txt";

  try {
    await fs.access(fileToRemovePath, fs.constants.F_OK);
    await fs.rm(fileToRemovePath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
