import { readdir, copyFile } from "node:fs/promises";
import fs from "fs";
export const copy = async () => {
  try {
    fs.access("./files", function (err) {
      if (err && err.code === "ENOENT") {
        throw new Error("FS operation failed");
      }

      fs.mkdir("files_copy", (err) => {
        if (err) throw new Error("FS operation failed");
      });
    });
    const files = await readdir("./files");
    for (const file of files) {
      copyFile(
        `./files/${file}`,
        `./files_copy/${file}`,
        fs.constants.COPYFILE_EXCL
      ).catch((e) => {
        throw new Error("FS operation failed");
      });
    }
  } catch (err) {
    console.error(err);
  }
};

copy();
