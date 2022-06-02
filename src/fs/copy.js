import { existsSync, readdirSync, copyFile } from "fs";
import { mkdir } from "fs/promises";

export const copy = async () => {
  if (existsSync("./files")) {
    if (!existsSync("./files_copy")) {
      await mkdir("files_copy", true);
      const files = readdirSync("./files");
      files.forEach((file) => {
        copyFile(`./files/${file}`, `./files_copy/${file}`, (err) => {
          if (err) {
            throw new Error("failed to copy file");
          }
        });
      });
    } else {
      throw new Error("folder files_copy already exist");
    }
  } else {
    throw new Error("folder files not exist");
  }
};

copy();
