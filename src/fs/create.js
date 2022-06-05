import { access, appendFile } from "node:fs/promises";
import { constants } from "fs";

export const create = async () => {
  try {
    await access("./src/fs/files/fresh.txt", constants.R_OK);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.message === "FS operation failed") {
      throw new Error("FS operation failed");
    }
    if (err?.code == "ENOENT") {
      appendFile("./src/fs/files/fresh.txt", "I am fresh and young");
    }
  }
};

create();
