import { access, mkdir, readdir, copyFile } from "node:fs/promises";
import { constants } from "fs";

export const copy = async () => {
  try {
    await access("./files", constants.R_OK | constants.W_OK);
    try {
      await access("./files_copy", constants.F_OK);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.message === "FS operation failed") {
        throw new Error("FS operation failed");
      }
      if (err?.code === "ENOENT") {
        await mkdir("./files_copy");

        const files = await readdir("./files");
        for (let file of files) {
          copyFile(`./files/${file}`, `./files_copy/${file}`);
        }
      }
    }
  } catch (err) {
    if (err?.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};
