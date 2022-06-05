import { access, readFile } from "node:fs/promises";
import { constants } from "fs";

export const read = async () => {
  try {
    await access("./src/fs/files/fileToRead.txt", constants.R_OK | constants.W_OK);
    let content = await readFile("./src/fs/files/fileToRead.txt", "utf8");
    console.log(content);
  } catch (err) {
    if (err?.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};
read();
