import * as fs from "fs";

const list = async () => {
  fs.readdir("./files", (err, files) => {
    if (err?.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      if (files?.length) {
        console.log("\x1b[31m", "\nList of files:\n", "\x1b[0m");
        files.forEach((file) => {
          console.log("\x1b[36m", file, "\x1b[0m");
        });
      }
    }
  });
};

await list();
