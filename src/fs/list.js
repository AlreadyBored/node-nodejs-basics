import { existsSync } from "fs";
import { readdir } from "fs/promises";

export const list = async () => {
  if (existsSync("./files")) {
    try {
      const files = await readdir("./files");
      files.forEach((el) => console.log(el));
    } catch (error) {
      throw new Error("FS operation failed");
    }
  } else {
    throw new Error("FS operation failed");
  }
};
list();
