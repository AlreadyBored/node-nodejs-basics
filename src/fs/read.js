import fs from "node:fs";

const read = async () => {
  const path = "./src/fs/files/fileToRead.txt";
  const errorMessage = "FS operation failed";

  const isFileExist = async (path) => {
    try {
      await fs.promises.access(path);
      return true;
    } catch (error) {
      console.log(errorMessage);
      return false;
    }
  };

  const putFileContentToConsole = async (path) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(data);
    });
  };

  if (await isFileExist(path)) {
    putFileContentToConsole(path);
  }
};

await read();
