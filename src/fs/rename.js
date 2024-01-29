import fs from "node:fs";

const rename = async () => {
  const filePath = "./src/fs/files/wrongFilename.txt";
  const newFileName = "properFilename.md";
  const errorMessage = "FS operation failed";

  const isFileExist = async (path) => {
    try {
      await fs.promises.access(path);
      return true;
    } catch (error) {
      return false;
    }
  };

  const renameFile = async (filePath, newFileName) => {
    fs.rename(filePath, newFileName, (error) => {
      console.log("File renamed successfully");
      if (error) {
        console.log(error);
        return;
      }
    });
  };

  try {
    if ((await isFileExist(filePath)) && !(await isFileExist(newFileName))) {
      renameFile(filePath, newFileName);
    } else {
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.log(error);
  }
};

await rename();
