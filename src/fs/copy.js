import fs from "fs";

const copy = async () => {
  const oldPath = new URL("./files", import.meta.url);
  const newPath = new URL("./files_copy", import.meta.url);

  fs.access(oldPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });

  fs.access(newPath, (err) => {
    if (err === null) {
      throw new Error("FS operation failed");
    }
  });

  fs.mkdir(newPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.readdir(oldPath, (err, files) => {
        if (err) {
          throw new Error("FS operation failed");
        }
        console.log(files);
        if (files) {
          files.forEach((file) => {
            const oldFile = new URL(`./files/${file}`, import.meta.url);
            const newFile = new URL(`./files_copy/${file}`, import.meta.url);
            fs.copyFile(oldFile, newFile, (err) => {
              if (err) {
                console.log(err);
                // throw new Error("FS operation failed");
              } else {
                console.log(`${file} copied`);
              }
            });
          });
        }
      });
    }
  });
};

await copy();
