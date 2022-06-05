import { access, mkdir, readdir, copyFile } from "node:fs/promises";
import { constants } from "fs";

export const copy = async () => {
  try {
    await access("./src/fs/files", constants.R_OK | constants.W_OK);
    try {
      await access("./src/fs/files_copy", constants.F_OK);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.message === "FS operation failed") {
        throw new Error("FS operation failed");
      }
      if (err?.code === "ENOENT") {
        await mkdir("./src/fs/files_copy");

        const files = await readdir("./src/fs/files");
        for (let file of files) {
          copyFile(`./src/fs/files/${file}`, `./src/fs/files_copy/${file}`);
        }
      }
    }
  } catch (err) {
    if (err?.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

copy();
