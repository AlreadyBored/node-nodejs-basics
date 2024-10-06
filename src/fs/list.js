import fs from "fs";
const list = async () => {
  fs.access("./files", (error) => {
    if (error) {
      // files does not exist.
      throw new Error("FS operation failed");
    }
    fs.readdir("./files", (err, files) => {
      let fileNames = [];
      files.forEach((file) => {
        fileNames.push(file);
      });
      console.log(fileNames);
    });
  });
};

await list();
