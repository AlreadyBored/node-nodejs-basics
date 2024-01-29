import fs from "node:fs";

const list = async () => {
  const path = "./src/fs/files";
  const errorMessage = "FS operation failed";

  const isFolderExist = async (path) => {
    try {
      await fs.promises.access(path);
      return true;
    } catch (error) {
      return false;
    }
  };

  const listFolder = async (path) => {
    fs.readdir(path, (error, files) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(files);
    });
  };

  if (await isFolderExist(path)) {
    listFolder(path);
  } else {
    console.log(errorMessage);
  }
};

await list();
