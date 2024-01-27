import fs from "fs";

const rename = async () => {
  const oldName = "files/wrongFilename.txt";
  const newName = "files/properFilename.md";
  const error = Error("FS operation failed");
  fs.access(newName, (err) => {
    if (err) {
      fs.rename(oldName, newName, (err) => {
        if (err) throw error;
      });
    } else throw error;
  });
};

await rename();
