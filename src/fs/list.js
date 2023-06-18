import fs from "fs";

const list = async () => {
  const dirPath = new URL("./files", import.meta.url);

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    if (files) {
      files.forEach((file) => console.log(file));
    }
  });
};

await list();
