import fs from "fs/promises";

const list = async () => {
    const folderPath = "./src/fs/files";

    try {
      await fs.access(folderPath, fs.constants.F_OK);
  
      const files = await fs.readdir(folderPath);
  
      files.forEach((filename) => {
        console.log(filename);
      });
    } catch (err) {
      if (err.code === "ENOENT") {
        throw new Error("FS operation failed");
      } else {
        throw new Error("FS operation failed");
      }
    }
  
};

await list();