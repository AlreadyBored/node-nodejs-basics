import fs from "fs";

const rename = async () => {
  const oldPath = new URL("./files/wrongFilename.txt", import.meta.url);
  const newPath = new URL("./files/properFilename.md", import.meta.url);

  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    console.log("File renamed");
  });
};

await rename();
