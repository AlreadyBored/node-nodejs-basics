import fs from "fs/promises";

const remove = async () => {
    const fileDir = "./src/fs/files/fileToRemove.txt";

    try {
      await fs.access(fileDir, fs.constants.F_OK);

      await fs.unlink(fileDir);
  
    } catch (err) {
      if (err.code === "ENOENT") {
        throw new Error("FS operation failed");
      } else {
        throw new Error("FS operation failed");
      }
    }
  
};

await remove();