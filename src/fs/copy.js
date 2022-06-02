import fs from "fs";

export const copy = async () => {
  // Write your code here
  fs.mkdir("files_copy", (err) => {
    if (err) throw new Error("FS operation failed");
  });

  fs.readdir("files", (err, data) => {
    if (err) throw new Error("FS operation failed");

    data.forEach((file) => {
      fs.readFile(`files/${file}`, (err, dataFile) => {
        fs.writeFile(`files_copy/${file}`, dataFile.toString(), (error) => {
          if (error) {
            throw new Error("FS operation failed");
          }
        });
      });
    });
  });
};

copy();
