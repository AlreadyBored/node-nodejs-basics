import fs from "fs/promises";

const remove = async () => {
  // Write your code here
  try {
    await fs.rm("./files/fileToRemove.txt");
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await remove();
