import fs from "fs";

export const remove = async () => {
  const fileToRemove = "files/fileToRemove.txt";

  fs.unlink(fileToRemove, (error) => {
    if (error) throw new Error("FS operation failed");
  });
};

remove();
