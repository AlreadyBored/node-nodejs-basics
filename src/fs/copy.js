import fs from "fs/promises";

export const copy = async () => {
  const filesFolder = "./src/fs/files";
  const filesCopyFolder = "./src/fs/files_copy";
  let files = [];
  try {
    files = await fs.readdir(filesFolder);
    if (files) {
      try {
        const filesCopy = await fs.readdir(filesCopyFolder);
        if (filesCopy) {
            throw new Error("FS operation failed");
        }
      } catch (error) {
        if (error.code === "ENOENT") {
          await fs.mkdir(filesCopyFolder);
          for (const file of files) {
            await fs.copyFile(
              `${filesFolder}/${file}`,
              `${filesCopyFolder}/${file}`
            );
          }
          console.log('Files copied to new folder');
        } else {
            console.log(error);
        }
      }
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
        console.log(error);
    }
  }
};

copy();
