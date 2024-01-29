import fs from "node:fs";

const remove = async () => {
  fs.access("./src/fs/files/fileToRemove.txt", fs.constants.F_OK, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    } else {
      fs.unlink("./src/fs/files/fileToRemove.txt", () => {});
    }
  });
};

await remove();
