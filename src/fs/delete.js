import fs from "fs/promises";

const remove = async () => {
  try {
    await fs.access("src/fs/files/fileToRemove.txt", fs.constants.F_OK);
    await fs.rm("src/fs/files/fileToRemove.txt");
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
