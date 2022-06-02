import { existsSync } from "fs";
import { unlink } from "fs/promises";

export const remove = async () => {
  if (existsSync("./files/fileToRemove.txt")) {
    try {
      unlink("./files/fileToRemove.txt");
    } catch (error) {
      throw new Error("FS operation failed");
    }
  } else {
    throw new Error("FS operation failed");
  }
};

remove();
