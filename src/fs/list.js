import { access, readdir } from "node:fs/promises";
import { constants } from "fs";

export const list = async () => {
  try {
    await access("./files", constants.R_OK | constants.W_OK);
    const files = await readdir("./files");
    // console.log(files)
    for (let file of files) {
      console.log(file);
    }
  } catch (err) {
    if (err?.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};
