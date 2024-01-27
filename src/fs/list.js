import fs from "fs";

const list = async () => {
  const dir = "files";
  const error = Error("FS operation failed");
  fs.readdir(dir, (err, files) => {
    if (err) {
      throw error;
    } else
      files.forEach((file) => {
        console.log(file);
      });
  });
};

await list();
