import fs from "node:fs";

const copy = async () => {
  const source = "./src/fs/files";
  const destination = "./src/fs/files_copy";
  const errorMessage = "FS operation failed";

  const isFolderExist = async (path) => {
    try {
      await fs.promises.access(path);
      return true;
    } catch (error) {
      return false;
    }
  };

  const copyFolder = async (source, destination) => {
    fs.cp(source, destination, { recursive: true }, (error) => {
      if (error) {
        console.log(error);
        return;
      }
    });
  };

  if ((await isFolderExist(source)) && !(await isFolderExist(destination))) {
    copyFolder(source, destination);
    console.log("Folder copied successfully");
  } else {
    console.log(errorMessage);
  }
};

copy();
