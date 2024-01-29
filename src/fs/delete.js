import fs from "fs";

const remove = async () => {
  // Write your code here
  if (fs.existsSync("./files/fileToRemove.txt")) {
    fs.rmSync("./files/fileToRemove.txt");
  } else {
      throw new Error('FS operation failed')
  }
};

await remove();
