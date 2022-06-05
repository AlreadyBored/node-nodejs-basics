import { access, readdir } from "node:fs/promises";
import { constants } from "fs";

export const list = async () => {
  try {
    await access("./src/fs/files", constants.R_OK | constants.W_OK);
    const files = await readdir("./src/fs/files");
    for (let file of files) {
      console.log(file);
    }
  } catch (err) {
    if (err?.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

list();
