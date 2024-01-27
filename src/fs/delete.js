import fs from "fs";

const remove = async () => {
  const path = "files/fileToRemove.txt";
  const error = Error("FS operation failed");
  fs.unlink(path, (err) => {
    if (err) throw error;
  });
};

await remove();
