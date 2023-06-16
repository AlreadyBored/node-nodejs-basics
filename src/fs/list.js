import fs from "fs/promises";

const list = async () => {
  try {
    const folderPath = "files";

    const folderExists = await fs
      .access(folderPath)
      .then(() => true)
      .catch(() => false);

    if (!folderExists) {
      throw new Error("Folder does not exist.");
    }

    const fileNames = await fs.readdir(folderPath);
    console.log(fileNames);
  } catch (error) {
    console.error("FS operation failed:", error.message);
  }
};

await list();
