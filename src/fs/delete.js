import fs from "node:fs";

const remove = async () => {
  const errorMessage = "FS operation failed";
  const filePath = "./src/fs/files/fileToRemove.txt";

  const isFileExist = async (path) => {
    try {
      await fs.promises.access(path);
      return true;
    } catch (error) {
      return false;
    }
  };

  const removeFile = async (path) => {
    fs.unlink(path, (error) => {
      console.log("File removed successfully");
      if (error) {
        console.log(error);
        return;
      }
    });
  };

  (await isFileExist(filePath)) ? removeFile(filePath) : console.log(errorMessage);
};

await remove();
