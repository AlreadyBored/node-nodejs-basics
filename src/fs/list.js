import fs from "fs";

export const list = async () => {
  const filesArray = [];

  fs.readdir("files", (error, files) => {
    if (error) throw new Error("FS operation failed");

    files.forEach((item) => {
      filesArray.push(item);
    });
    console.log(filesArray);
  });
};

list();
