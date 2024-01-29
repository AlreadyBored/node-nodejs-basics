import { readdir } from "node:fs";

const list = async () => {
  readdir("src/fs/files", { withFileTypes: true }, (err, files) => {
    if (err) throw new Error("FS operation failed");
    else {
      files.forEach((file) => {
        console.log(file.name);
      });
    }
  });
};

await list();
